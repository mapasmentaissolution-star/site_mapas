import { ChangeDetectionStrategy, Component, inject, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { CatalogData } from '../../services/catalog-data';
import { ProductCard } from '../../components/product-card/product-card';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-category',
  imports: [RouterLink, MatIconModule, ProductCard],
  template: `
    <main class="py-10 bg-[#F6F8FA] min-h-[70vh]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <a routerLink="/" class="hover:text-[#082B5C] transition-colors">Início</a>
          <span>/</span>
          <span class="text-slate-800 font-semibold">{{ categoryInfo().title }}</span>
        </nav>

        <!-- Category Banner Header -->
        <div class="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs mb-8">
          <div class="max-w-3xl">
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF3FC] text-[#0D4F91] text-xs font-bold uppercase tracking-wider mb-3">
              <mat-icon class="!text-sm !w-4 !h-4">{{ categoryInfo().icon }}</mat-icon>
              <span>{{ categoryInfo().badgeText }}</span>
            </div>

            <h1 class="font-display font-black text-3xl sm:text-4xl text-[#082B5C] tracking-tight mb-3">
              {{ categoryInfo().title }}
            </h1>

            <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
              {{ categoryInfo().description }}
            </p>
          </div>
        </div>

        <!-- Controls Bar: Filter & Sort -->
        <div class="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs mb-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div class="text-xs text-slate-600 font-medium">
            Exibindo <span class="font-bold text-slate-900 font-mono">{{ sortedProducts().length }}</span> materiais digitais disponíveis
          </div>

          <div class="flex items-center gap-2">
            <label for="sort-order" class="text-xs text-slate-500 font-medium shrink-0">Ordenar por:</label>
            <select
              id="sort-order"
              [value]="selectedSort()"
              (change)="onSortChange($event)"
              class="px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-700 outline-hidden focus:border-[#0D4F91] cursor-pointer"
            >
              <option value="featured">Destaques</option>
              <option value="price-asc">Menor Preço</option>
              <option value="price-desc">Maior Preço</option>
              <option value="rating">Melhor Avaliados</option>
            </select>
          </div>
        </div>

        <!-- Products Grid -->
        @if (sortedProducts().length > 0) {
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            @for (prod of sortedProducts(); track prod.id) {
              <app-product-card [product]="prod" />
            }
          </div>
        } @else {
          <div class="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto">
            <mat-icon class="!text-5xl text-slate-300 mb-3">inventory_2</mat-icon>
            <h3 class="font-display font-bold text-lg text-slate-800 mb-1">Nenhum material encontrado</h3>
            <p class="text-xs text-slate-500 mb-6">
              Em breve novos materiais serão adicionados a esta categoria.
            </p>
            <a
              routerLink="/mapas-mentais"
              class="px-5 py-2.5 bg-[#082B5C] text-white text-xs font-bold rounded-xl hover:bg-[#0D4F91] transition-colors inline-block"
            >
              Ver Outros Mapas Mentais
            </a>
          </div>
        }
      </div>
    </main>
  `
})
export class CategoryPage {
  private readonly route = inject(ActivatedRoute);
  private readonly catalogData = inject(CatalogData);

  readonly routeData = toSignal(this.route.url);
  readonly selectedSort = signal<string>('featured');

  readonly currentSlug = computed(() => {
    const url = this.routeData();
    if (url && url.length > 0) {
      return url[0].path;
    }
    return 'mapas-mentais';
  });

  readonly categoryInfo = computed(() => {
    const slug = this.currentSlug();
    const info = this.catalogData.getCategoryBySlug(slug);
    if (info) return info;

    return {
      id: 'mapas-mentais',
      slug: 'mapas-mentais',
      title: 'Mapas Mentais',
      shortTitle: 'Mapas Mentais',
      description: 'Materiais digitais organizados visualmente para acelerar sua compreensão e memorização.',
      icon: 'hub',
      color: '#082B5C',
      badgeText: 'Catálogo Geral'
    };
  });

  readonly rawProducts = computed(() => {
    return this.catalogData.getProductsByCategory(this.currentSlug());
  });

  readonly sortedProducts = computed(() => {
    const list = [...this.rawProducts()];
    const sort = this.selectedSort();

    if (sort === 'price-asc') {
      return list.sort((a, b) => a.price - b.price);
    }
    if (sort === 'price-desc') {
      return list.sort((a, b) => b.price - a.price);
    }
    if (sort === 'rating') {
      return list.sort((a, b) => b.rating - a.rating);
    }
    // Default: featured / bestsellers first
    return list.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
  });

  onSortChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.selectedSort.set(select.value);
  }
}
