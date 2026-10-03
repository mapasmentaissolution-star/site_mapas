import { Injectable, signal } from '@angular/core';
import { Product, CategoryInfo } from '../models/product.model';
import { PRODUCTS, CATEGORIES, TESTIMONIALS, FAQS } from '../data/products.data';

@Injectable({
  providedIn: 'root'
})
export class CatalogData {
  private readonly productsList = signal<Product[]>(PRODUCTS);
  private readonly categoriesList = signal<CategoryInfo[]>(CATEGORIES);

  getAllProducts(): Product[] {
    return this.productsList();
  }

  getBestSellers(): Product[] {
    return this.productsList().filter(p => p.isBestSeller);
  }

  getFeaturedProducts(): Product[] {
    return this.productsList().filter(p => p.isFeatured);
  }

  getProductBySlug(slug: string): Product | undefined {
    return this.productsList().find(p => p.slug === slug || p.id === slug);
  }

  getProductsByCategory(categorySlug: string): Product[] {
    if (categorySlug === 'mapas-mentais') {
      return this.productsList().filter(p => p.categories.includes('mapas-mentais'));
    }
    return this.productsList().filter(p => p.categories.includes(categorySlug));
  }

  getCategoryBySlug(slug: string): CategoryInfo | undefined {
    if (slug === 'mapas-mentais') {
      return {
        id: 'mapas-mentais',
        slug: 'mapas-mentais',
        title: 'Todos os Mapas Mentais',
        shortTitle: 'Mapas Mentais',
        description: 'Explore nosso catálogo completo de materiais estruturados visualmente para máxima retenção.',
        icon: 'hub',
        color: '#082B5C',
        badgeText: 'Catálogo Geral'
      };
    }
    return this.categoriesList().find(c => c.slug === slug);
  }

  getAllCategories(): CategoryInfo[] {
    return this.categoriesList();
  }

  getRelatedProducts(productId: string, limit = 4): Product[] {
    const current = this.productsList().find(p => p.id === productId);
    if (!current) return this.productsList().slice(0, limit);

    return this.productsList()
      .filter(p => p.id !== productId && p.categories.some(cat => current.categories.includes(cat)))
      .slice(0, limit);
  }

  searchProducts(query: string): Product[] {
    const term = query.toLowerCase().trim();
    if (!term) return [];

    return this.productsList().filter(p => {
      const titleMatch = p.title.toLowerCase().includes(term);
      const descMatch = p.shortDescription.toLowerCase().includes(term);
      const catMatch = p.categories.some(c => c.toLowerCase().includes(term));
      const subjectMatch = p.subjects?.some(s => s.toLowerCase().includes(term));
      return titleMatch || descMatch || catMatch || subjectMatch;
    });
  }

  getTestimonials() {
    return TESTIMONIALS;
  }

  getFaqs() {
    return FAQS;
  }
}
