import { ChangeDetectionStrategy, Component, inject, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { CatalogData } from '../../services/catalog-data';
import { ProductCard } from '../../components/product-card/product-card';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-search-page',
  imports: [RouterLink, MatIconModule, ProductCard],
  template: `
    <main class="py-12 bg-[#F6F8FA] min-h-[70vh]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <a routerLink="/" class="hover:text-[#082B5C] transition-colors">Início</a>
          <span>/</span>
          <span class="text-slate-800 font-semibold">Busca</span>
        </nav>

        <!-- Search Header -->
        <div class="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs mb-8">
          <div class="max-w-3xl">
            <span class="text-xs font-bold uppercase tracking-wider text-[#0D4F91] block mb-2">
              Resultados da Pesquisa
            </span>

            <h1 class="font-display font-black text-2xl sm:text-3xl text-[#082B5C] tracking-tight mb-2">
              Resultados para: <span class="text-[#0D4F91]">"{{ queryTerm() }}"</span>
            </h1>

            <p class="text-xs sm:text-sm text-slate-500">
              Encontramos <strong class="text-slate-800 font-mono">{{ searchResults().length }}</strong> materiais correspondentes ao seu termo de busca.
            </p>
          </div>
        </div>

        <!-- Results Grid -->
        @if (searchResults().length > 0) {
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            @for (prod of searchResults(); track prod.id) {
              <app-product-card [product]="prod" />
            }
          </div>
        } @else {
          <!-- Empty Search State -->
          <div class="bg-white rounded-3xl p-16 text-center border border-slate-200 max-w-lg mx-auto shadow-xs">
            <mat-icon class="!text-5xl text-slate-300 mb-3">search_off</mat-icon>
            <h2 class="font-display font-bold text-xl text-slate-900 mb-2">
              Nenhum material encontrado para "{{ queryTerm() }}"
            </h2>
            <p class="text-xs text-slate-500 mb-6">
              Tente buscar por termos como "ENEM", "Mapas Mentais", "Simulado", "Funções", "Redação" ou "Combo".
            </p>
            <a
              routerLink="/mapas-mentais"
              class="px-6 py-3 bg-[#082B5C] text-white font-bold text-xs rounded-xl hover:bg-[#0D4F91] transition-colors inline-block"
            >
              Ver Todos os Mapas Mentais
            </a>
          </div>
        }
      </div>
    </main>
  `
})
export class SearchPage {
  private readonly route = inject(ActivatedRoute);
  private readonly catalogData = inject(CatalogData);

  readonly queryParams = toSignal(this.route.queryParams);

  readonly queryTerm = computed(() => {
    return this.queryParams()?.['q'] || '';
  });

  readonly searchResults = computed(() => {
    const q = this.queryTerm();
    if (!q) return this.catalogData.getAllProducts();
    return this.catalogData.searchProducts(q);
  });
}
