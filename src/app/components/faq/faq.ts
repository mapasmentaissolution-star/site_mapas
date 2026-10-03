import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CatalogData } from '../../services/catalog-data';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-faq',
  imports: [MatIconModule],
  template: `
    <section class="py-16 bg-white border-b border-slate-200/60">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center max-w-xl mx-auto mb-12">
          <span class="text-xs font-bold uppercase tracking-wider text-[#0D4F91] block mb-1">
            Tire Suas Dúvidas
          </span>
          <h2 class="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            DÚVIDAS FREQUENTES
          </h2>
        </div>

        <!-- Accordion List -->
        <div class="space-y-3">
          @for (faq of faqs; track $index) {
            <div class="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-[#F6F8FA] hover:border-slate-300">
              <button
                type="button"
                (click)="toggle($index)"
                class="w-full flex items-center justify-between p-5 text-left font-display font-bold text-slate-900 text-sm sm:text-base cursor-pointer gap-4"
              >
                <span>{{ faq.question }}</span>
                <mat-icon
                  class="text-[#0D4F91] transform transition-transform duration-200 shrink-0"
                  [class.rotate-180]="openIndex() === $index"
                >
                  expand_more
                </mat-icon>
              </button>

              @if (openIndex() === $index) {
                <div class="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60">
                  {{ faq.answer }}
                </div>
              }
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class Faq {
  private readonly catalogData = inject(CatalogData);
  readonly faqs = this.catalogData.getFaqs();
  readonly openIndex = signal<number | null>(0); // First item open by default

  toggle(index: number): void {
    this.openIndex.update(current => (current === index ? null : index));
  }
}
