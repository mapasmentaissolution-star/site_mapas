import { ChangeDetectionStrategy, Component, inject, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { CatalogData } from '../../services/catalog-data';
import { ProductCard } from '../../components/product-card/product-card';
import { EnemFreeGift } from '../../components/enem-free-gift/enem-free-gift';
import { FREE_ENEM_PDF_URL } from '../../data/products.data';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-category',
  imports: [RouterLink, MatIconModule, ProductCard, EnemFreeGift],
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

        <!-- Aviso de "Em Breve" para categorias em desenvolvimento -->
        @if (currentSlug() === 'ingles' || currentSlug() === 'programacao') {
          <div class="mb-8 p-5 rounded-2xl bg-amber-50 border border-amber-200/90 text-amber-950 flex items-start sm:items-center gap-3.5 shadow-xs">
            <div class="w-10 h-10 rounded-xl bg-amber-200/80 text-amber-900 flex items-center justify-center shrink-0 font-bold">
              <mat-icon class="!text-xl">hourglass_top</mat-icon>
            </div>
            <div class="flex-1 text-xs sm:text-sm leading-relaxed">
              <strong class="font-bold block text-amber-900 mb-0.5">Área em desenvolvimento • Lançamento em breve</strong>
              <span>Ainda não temos mapas mentais disponíveis nesta área. Nossa equipe está preparando esquemas visuais completos com lançamento previsto em breve!</span>
            </div>
          </div>
        }

        <!-- Destaque Especial: Brinde Gratuito 5 Mapas ENEM 2026 -->
        @if (currentSlug() === 'enem-2026') {
          <div class="mb-8 p-6 rounded-3xl bg-gradient-to-r from-[#082B5C] via-[#0D4F91] to-[#082B5C] text-white border-2 border-[#F7C51E] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="flex items-center gap-4">
              <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#F7C51E] text-slate-950 flex items-center justify-center shrink-0 shadow-md">
                <mat-icon class="!text-3xl text-[#082B5C]">card_giftcard</mat-icon>
              </div>
              <div>
                <span class="inline-block px-2.5 py-0.5 rounded-full bg-[#F7C51E] text-slate-950 text-[10px] font-black uppercase tracking-wider mb-1">
                  100% GRATUITO • DOWNLOAD LIBERADO
                </span>
                <h3 class="font-display font-black text-lg sm:text-xl text-white">
                  5 Mapas Mentais do ENEM 2026 em PDF
                </h3>
                <p class="text-xs text-slate-200 mt-0.5 max-w-xl">
                  Amostra oficial com 1 mapa de cada uma das 5 áreas para você testar nossa metodologia visual sem custo nenhum.
                </p>
              </div>
            </div>

            <a
              [href]="freePdfUrl"
              target="_blank"
              rel="noopener noreferrer"
              download="mapa-enem-gratis.pdf"
              class="w-full md:w-auto px-6 py-3.5 bg-[#F7C51E] hover:bg-amber-400 text-slate-950 font-display font-black text-xs sm:text-sm rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 shrink-0 flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
            >
              <mat-icon class="!text-lg text-[#082B5C]">download</mat-icon>
              <span>BAIXAR PDF GRÁTIS</span>
            </a>
          </div>
        }

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

        <!-- Brinde Gratuito na página do ENEM 2026 -->
        @if (currentSlug() === 'enem-2026') {
          <div class="mt-14 -mx-4 sm:-mx-6 lg:-mx-8">
            <app-enem-free-gift />
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
  readonly freePdfUrl = FREE_ENEM_PDF_URL;

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
