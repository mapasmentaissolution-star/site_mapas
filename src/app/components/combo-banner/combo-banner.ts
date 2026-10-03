import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-combo-banner',
  imports: [MatIconModule],
  template: `
    <section class="py-16 bg-[#EAF3FC] border-y border-[#0D4F91]/15 relative overflow-hidden">
      <!-- Decorative background accent shapes -->
      <div class="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#0D4F91]/5 pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-blue-100 flex flex-col lg:flex-row items-center justify-between gap-10">
          <!-- Left: Information & Features -->
          <div class="flex-1 max-w-2xl">
            <!-- Badge -->
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7C51E] text-slate-900 font-extrabold text-xs tracking-wider uppercase mb-4 shadow-xs">
              <mat-icon class="!text-sm !w-4 !h-4 text-[#082B5C]">loyalty</mat-icon>
              <span>ECONOMIZE NO COMBO</span>
            </div>

            <!-- Title -->
            <h2 class="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#082B5C] tracking-tight leading-tight mb-3">
              ENEM 2026<br />
              MAPAS MENTAIS + SIMULADO
            </h2>

            <!-- Lead Subtitle -->
            <p class="text-sm sm:text-base font-semibold text-slate-700 mb-6">
              150 MAPAS MENTAIS + SIMULADO 40 QUESTÕES COM GABARITO E FOLHA DE RESPOSTAS.
            </p>

            <!-- Checklist -->
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 mb-8">
              <li class="flex items-center gap-2">
                <mat-icon class="!text-base !w-4 !h-4 text-emerald-600 shrink-0">check_circle</mat-icon>
                <span>Conteúdo completo (5 áreas do conhecimento)</span>
              </li>
              <li class="flex items-center gap-2">
                <mat-icon class="!text-base !w-4 !h-4 text-emerald-600 shrink-0">check_circle</mat-icon>
                <span>150 mapas mentais organizados por assunto</span>
              </li>
              <li class="flex items-center gap-2">
                <mat-icon class="!text-base !w-4 !h-4 text-emerald-600 shrink-0">check_circle</mat-icon>
                <span>Simulado com 40 questões no estilo oficial</span>
              </li>
              <li class="flex items-center gap-2">
                <mat-icon class="!text-base !w-4 !h-4 text-emerald-600 shrink-0">check_circle</mat-icon>
                <span>Gabarito comentado e folha de respostas</span>
              </li>
              <li class="flex items-center gap-2 sm:col-span-2">
                <mat-icon class="!text-base !w-4 !h-4 text-emerald-600 shrink-0">check_circle</mat-icon>
                <span>Acesso imediato em PDF pronto para imprimir</span>
              </li>
            </ul>

            <!-- Pricing & CTA -->
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
              <div>
                <span class="block text-xs text-slate-400 line-through">De R$ 49,90 por apenas</span>
                <div class="flex items-baseline gap-1">
                  <span class="text-xs font-bold text-slate-700">R$</span>
                  <span class="text-3xl font-black text-[#082B5C] font-mono tracking-tight">19,99</span>
                  <span class="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded ml-2">
                    Economia de R$ 29,91
                  </span>
                </div>
              </div>

              <a
                href="https://pay.kiwify.com.br/nsHOTy9"
                target="_blank"
                rel="noopener noreferrer"
                class="px-8 py-4 bg-[#082B5C] hover:bg-[#0D4F91] text-white font-display font-extrabold text-sm rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>QUERO O COMBO NA KIWIFY</span>
                <mat-icon class="!text-lg text-[#F7C51E]">bolt</mat-icon>
              </a>
            </div>
          </div>

          <!-- Right: Visual Dual Product Showcase -->
          <div class="w-full lg:w-96 flex flex-col items-center">
            <div class="relative w-full max-w-sm">
              <div class="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
                <img
                  src="/assets/images/mockup_combo_enem_1790993357131.jpg"
                  alt="Combo ENEM 2026 Mapas Mentais mais Simulado da Mappia"
                  referrerpolicy="no-referrer"
                  class="w-full h-72 object-cover object-top"
                />
              </div>

              <!-- Floating Plus Overlay badge -->
              <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#082B5C] text-[#F7C51E] font-bold text-xs px-4 py-1.5 rounded-full shadow-md border-2 border-white flex items-center gap-1.5 whitespace-nowrap">
                <mat-icon class="!text-sm">add_circle</mat-icon>
                <span>COMBO COMPLETO</span>
              </div>
            </div>

            <div class="text-[11px] text-slate-500 text-center mt-6">
              PDFs para download instantâneo · Pronto para imprimir ou estudar no celular
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ComboBanner {}
