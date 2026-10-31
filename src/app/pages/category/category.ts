import { ChangeDetectionStrategy, Component, inject, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { CatalogData } from '../../services/catalog-data';
import { ProductCard } from '../../components/product-card/product-card';
import { EnemFreeGift } from '../../components/enem-free-gift/enem-free-gift';
import { FREE_ENEM_PDF_URL, MAPPIA_MINI_PRICE } from '../../data/products.data';

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

          @if (currentSlug().startsWith('mappia-mini')) {
            <div class="mt-6 inline-flex items-center gap-3 rounded-2xl border-2 border-amber-300 bg-gradient-to-r from-amber-50 to-yellow-100 px-5 py-3 shadow-md">
              <mat-icon class="!text-2xl text-amber-600">sell</mat-icon>
              <div>
                <span class="block text-[10px] font-black uppercase tracking-widest text-amber-800">Todos os mapas Mappia Mini</span>
                <strong class="font-display text-2xl font-black text-[#082B5C]">R$ {{ miniPriceLabel }}</strong>
              </div>
            </div>
          }
        </div>

        @if (currentSlug() === 'mappia-mini') {
          <section class="mb-8" aria-label="Categorias Mappia Mini">
            <h2 class="mb-4 font-display text-lg font-black text-[#082B5C]">Explore as categorias</h2>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <a
                routerLink="/mappia-mini/culinaria"
                class="group flex items-center gap-3 rounded-2xl border border-amber-200 bg-white p-4 shadow-xs transition hover:-translate-y-0.5 hover:border-amber-400 hover:shadow-md"
              >
                <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <mat-icon>restaurant</mat-icon>
                </span>
                <span class="flex-1">
                  <strong class="block text-sm font-bold text-slate-900">Culinária</strong>
                  <span class="text-xs text-slate-500">Receitas e técnicas práticas</span>
                </span>
                <mat-icon class="text-amber-600 transition group-hover:translate-x-1">arrow_forward</mat-icon>
              </a>

              <div class="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-200 text-slate-500">
                  <mat-icon>handyman</mat-icon>
                </span>
                <span>
                  <strong class="block text-sm font-bold text-slate-700">Artesanato</strong>
                  <span class="text-xs text-slate-500">Novos mapas em breve</span>
                </span>
              </div>

              <div class="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-200 text-slate-500">
                  <mat-icon>computer</mat-icon>
                </span>
                <span>
                  <strong class="block text-sm font-bold text-slate-700">Informática</strong>
                  <span class="text-xs text-slate-500">Novos mapas em breve</span>
                </span>
              </div>
            </div>
          </section>
        }

        <!-- Destaque Especial: Brinde Gratuito 5 Mapas ENEM 2026 -->
        @if (currentSlug() === 'enem-2026') {
          <div class="mb-8 p-6 rounded-3xl bg-gradient-to-r from-[#082B5C] via-[#0D4F91] to-[#082B5C] text-white border-2 border-[#25D366] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="flex items-center gap-4">
              <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#25D366] text-slate-950 flex items-center justify-center shrink-0 shadow-md">
                <mat-icon class="!text-3xl text-slate-950">card_giftcard</mat-icon>
              </div>
              <div>
                <span class="inline-block px-2.5 py-0.5 rounded-full bg-[#25D366] text-slate-950 text-[10px] font-black uppercase tracking-wider mb-1">
                  100% GRATUITO • MATERIAL NO WHATSAPP
                </span>
                <h3 class="font-display font-black text-lg sm:text-xl text-white">
                  5 Mapas Mentais do ENEM 2026 em PDF
                </h3>
                <p class="text-xs text-slate-200 mt-0.5 max-w-xl">
                  Amostra oficial com 1 mapa de cada uma das 5 áreas para receber diretamente no seu WhatsApp sem custo nenhum.
                </p>
              </div>
            </div>

            <a
              [href]="freePdfUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full md:w-auto px-6 py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 font-display font-black text-xs sm:text-sm rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 shrink-0 flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
            >
              <svg class="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.077-2.022-.472-1.688-.7-2.775-2.42-2.859-2.533-.084-.113-.683-.907-.683-1.731 0-.824.432-1.229.586-1.398.154-.17.336-.212.449-.212.112 0 .225.001.323.006.103.005.241-.039.377.29.144.35.488 1.19.531 1.277.043.088.072.19.014.305-.058.115-.088.187-.174.288-.087.101-.183.226-.261.304-.087.087-.178.182-.077.355.101.174.45 1.741 1.543 2.128.324.115.597.184.802.249.325.103.621.089.855.054.261-.039.805-.329.919-.646.114-.317.114-.588.08-.646-.034-.058-.124-.093-.268-.164z"/>
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.05 22l4.982-1.307A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.167c-1.614 0-3.12-.442-4.417-1.211l-.317-.188-2.969.779.792-2.894-.207-.329A8.132 8.132 0 013.833 12c0-4.503 3.664-8.167 8.167-8.167 4.503 0 8.167 3.664 8.167 8.167 0 4.503-3.664 8.167-8.167 8.167z"/>
              </svg>
              <span>QUERO RECEBER MEU MATERIAL GRATUITO</span>
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
  readonly miniPriceLabel = MAPPIA_MINI_PRICE.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  readonly currentSlug = computed(() => {
    const url = this.routeData();
    if (url && url.length > 0) {
      if (url[0].path === 'mappia-mini' && url[1]?.path === 'culinaria') {
        return 'mappia-mini-culinaria';
      }
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
