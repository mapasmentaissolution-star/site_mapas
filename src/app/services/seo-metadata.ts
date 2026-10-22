import { DOCUMENT } from '@angular/common';
import { DestroyRef, Injectable, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { CatalogData } from './catalog-data';
import { Product } from '../models/product.model';
import { SITE_URL } from '../data/site.config';

@Injectable({
  providedIn: 'root'
})
export class SeoMetadata {
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);
  private readonly title = inject(Title);
  private readonly catalog = inject(CatalogData);

  constructor() {
    const siteOrigin = this.siteOrigin();
    this.setStructuredData('site-seo-jsonld', {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Mappia Estudos',
      ...(siteOrigin ? {
        url: siteOrigin,
        logo: new URL('/assets/images/mappia_official_logo_1790962795414.jpg', siteOrigin).toString()
      } : {})
    });

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(event => this.updateForUrl(event.urlAfterRedirects));

    this.updateForUrl(this.router.url);
  }

  private updateForUrl(url: string): void {
    const pathname = url.split(/[?#]/, 1)[0] || '/';
    const productMatch = pathname.match(/^\/produto\/([^/]+)$/);

    if (productMatch) {
      const product = this.catalog.getProductBySlug(decodeURIComponent(productMatch[1]));
      if (product) {
        this.updateProduct(product, pathname);
        return;
      }
    }

    const categorySlug = pathname.replace(/^\/|\/$/g, '');
    const category = categorySlug ? this.catalog.getCategoryBySlug(categorySlug) : undefined;
    if (category) {
      this.updatePage(
        `${category.title} | Mapas Mentais Mappia`,
        category.description,
        pathname,
        'website',
        '/assets/images/mappia_official_logo_1790962795414.jpg',
        true
      );
      this.setStructuredData('page-seo-jsonld', {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: category.title,
        description: category.description,
        ...(this.absoluteUrl(pathname) ? { url: this.absoluteUrl(pathname) } : {})
      });
      return;
    }

    if (pathname === '/busca') {
      this.updatePage(
        'Buscar mapas mentais | Mappia',
        'Encontre mapas mentais e materiais digitais para estudar, revisar e aprender.',
        pathname,
        'website',
        '/assets/images/mappia_official_logo_1790962795414.jpg',
        false
      );
      this.meta.updateTag({ name: 'robots', content: 'noindex,follow' });
      this.removeStructuredData('page-seo-jsonld');
      return;
    }

    this.updatePage(
      'Mappia | Mapas Mentais para Estudar, Revisar e Aprender',
      'Encontre mapas mentais em PDF para ENEM, concursos, estudos bíblicos, inglês e programação. Aprenda, revise e memorize com materiais visuais.',
      '/',
      'website',
      '/assets/images/mappia_official_logo_1790962795414.jpg',
      true
    );
    this.setStructuredData('page-seo-jsonld', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Mappia Estudos',
      ...(this.siteOrigin() ? { url: this.siteOrigin() } : {}),
      inLanguage: 'pt-BR'
    });
  }

  private updateProduct(product: Product, pathname: string): void {
    this.updatePage(
      `${product.title} | Mappia Estudos`,
      product.shortDescription,
      pathname,
      'product',
      product.image,
      true
    );

    this.setStructuredData('page-seo-jsonld', {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.title,
      description: product.fullDescription,
      ...(this.absoluteUrl(product.image) ? { image: this.absoluteUrl(product.image) } : {}),
      category: product.categories.join(', '),
      brand: {
        '@type': 'Brand',
        name: 'Mappia Estudos'
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'BRL',
        price: product.price.toFixed(2),
        availability: product.isComingSoon
          ? 'https://schema.org/PreOrder'
          : 'https://schema.org/InStock',
        ...(this.isAbsoluteUrl(product.kiwifyCheckoutUrl)
          ? { url: product.kiwifyCheckoutUrl }
          : {})
      }
    });
  }

  private updatePage(
    title: string,
    description: string,
    pathname: string,
    type: 'website' | 'product',
    imagePath: string,
    indexable: boolean
  ): void {
    this.title.setTitle(title);
    this.setCanonical(pathname, indexable);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: indexable ? 'index,follow' : 'noindex,follow' });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:type', content: type });
    this.updateUrlTag('property', 'og:url', this.absoluteUrl(pathname));
    this.updateUrlTag('property', 'og:image', this.absoluteUrl(imagePath));
    this.meta.updateTag({ property: 'og:locale', content: 'pt_BR' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.updateUrlTag('name', 'twitter:image', this.absoluteUrl(imagePath));
  }

  private updateUrlTag(attribute: 'name' | 'property', key: string, url: string | undefined): void {
    if (url) {
      this.meta.updateTag({ [attribute]: key, content: url }, `${attribute}="${key}"`);
    } else {
      this.meta.removeTag(`${attribute}="${key}"`);
    }
  }

  private setStructuredData(id: string, data: Record<string, unknown>): void {
    let script = this.document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = this.document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data).replace(/</g, '\\u003c');
  }

  private removeStructuredData(id: string): void {
    this.document.getElementById(id)?.remove();
  }

  private setCanonical(pathname: string, indexable: boolean): void {
    const existing = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!indexable) {
      existing?.remove();
      return;
    }

    const canonical = existing ?? this.document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = this.absoluteUrl(pathname);
    if (!existing) this.document.head.appendChild(canonical);
  }

  private siteOrigin(): string {
    return SITE_URL;
  }

  private absoluteUrl(path: string): string {
    return new URL(path, this.siteOrigin()).toString();
  }

  private isAbsoluteUrl(url: string): boolean {
    return /^https?:\/\//i.test(url);
  }
}
