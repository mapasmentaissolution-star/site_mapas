import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CatalogData } from '../../services/catalog-data';
import { ProductCard } from '../product-card/product-card';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-best-sellers',
  imports: [MatIconModule, ProductCard],
  template: `
    <section class="py-16 bg-[#F6F8FA]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center max-w-2xl mx-auto mb-12">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF3FC] text-[#0D4F91] text-xs font-bold uppercase tracking-wider mb-2">
            <mat-icon class="!text-sm !w-4 !h-4 text-[#F7C51E]">local_fire_department</mat-icon>
            <span>Destaques da Loja Mappia</span>
          </div>
          <h2 class="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight mb-3">
            MAIS VENDIDOS
          </h2>
          <p class="text-sm text-slate-600 max-w-xl mx-auto">
            Materiais digitais em PDF para aprender, revisar e memorizar com máxima eficiência. Liberação imediata após compra no Kiwify.
          </p>
        </div>

        <!-- Products Grid: 3 columns -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          @for (prod of products; track prod.id) {
            <app-product-card [product]="prod" />
          }
        </div>
      </div>
    </section>
  `
})
export class BestSellers {
  private readonly catalogData = inject(CatalogData);
  readonly products = this.catalogData.getAllProducts();
}
