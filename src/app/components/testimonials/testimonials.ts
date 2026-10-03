import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CatalogData } from '../../services/catalog-data';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-testimonials',
  imports: [MatIconModule],
  template: `
    <section class="py-16 bg-[#F6F8FA] border-b border-slate-200/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center max-w-xl mx-auto mb-12">
          <span class="text-xs font-bold uppercase tracking-wider text-[#0D4F91] block mb-1">
            Experiência do Estudante
          </span>
          <h2 class="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight mb-2">
            O QUE NOSSOS CLIENTES DIZEM
          </h2>
          <p class="text-xs text-slate-500">
            Depoimentos demonstrativos de estudantes e vestibulandos que utilizam nossos materiais.
          </p>
        </div>

        <!-- Testimonials 4-Card Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          @for (test of testimonials; track test.id) {
            <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <!-- Stars -->
                <div class="flex items-center gap-1 text-amber-500 mb-3">
                  @for (star of [1,2,3,4,5]; track star) {
                    <mat-icon class="!text-sm !w-4 !h-4">star</mat-icon>
                  }
                </div>

                <!-- Comment -->
                <p class="text-xs text-slate-700 leading-relaxed mb-4 italic">
                  "{{ test.comment }}"
                </p>
              </div>

              <!-- Author Info -->
              <div class="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-[#EAF3FC] text-[#082B5C] font-display font-bold flex items-center justify-center text-sm border border-[#0D4F91]/20 shrink-0">
                  {{ test.name.charAt(0) }}
                </div>
                <div class="min-w-0">
                  <h4 class="text-xs font-bold text-slate-900 truncate">
                    {{ test.name }}
                  </h4>
                  <div class="text-[11px] text-[#0D4F91] font-medium truncate">
                    {{ test.role }}
                  </div>
                  <div class="text-[10px] text-slate-400">
                    {{ test.material }}
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class Testimonials {
  private readonly catalogData = inject(CatalogData);
  readonly testimonials = this.catalogData.getTestimonials();
}
