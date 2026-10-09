import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FREE_ENEM_PDF_URL } from '../../data/products.data';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-hero',
  imports: [RouterLink, MatIconModule],
  template: `
    <section class="relative bg-gradient-to-b from-white via-[#F6F8FA] to-white pt-8 pb-16 lg:py-20 overflow-hidden border-b border-slate-200/60">
      <!-- Subtle architectural background graphic -->
      <div class="absolute inset-0 pointer-events-none opacity-40">
        <div class="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#EAF3FC] blur-3xl"></div>
        <div class="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-[#F7C51E]/10 blur-3xl"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <!-- 45% Text Column (approx 5 cols out of 12) -->
          <div class="lg:col-span-5 flex flex-col items-start text-left">
            <!-- Kicker -->
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF3FC] text-[#082B5C] border border-[#0D4F91]/15 text-xs font-bold tracking-wide uppercase mb-5">
              <span class="w-2 h-2 rounded-full bg-[#F7C51E]"></span>
              <span>CONHECIMENTO ORGANIZADO, RESULTADOS REAIS</span>
            </div>

            <!-- Main Heading with balanced lines -->
            <h1 class="font-display font-extrabold text-slate-900 text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.15] mb-5">
              ESTUDE DE FORMA<br />
              <span class="text-[#082B5C]">MAIS </span>
              <span class="text-[#F7C51E] bg-[#082B5C] px-3 py-0.5 rounded-lg inline-block shadow-xs">
                INTELIGENTE
              </span>
            </h1>

            <!-- Subtitle -->
            <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8 font-normal">
              Mapas mentais premium para aprender, revisar e memorizar com mais clareza. Conteúdos complexos sintetizados em estruturas visuais de alto impacto.
            </p>

            <!-- Action CTAs -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-4">
              <!-- SUPER DESTAQUE: BAIXAR PDF ENEM GRÁTIS -->
              <a
                [href]="freePdfUrl"
                target="_blank"
                rel="noopener noreferrer"
                download="mapa-enem-gratis.pdf"
                class="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-gradient-to-r from-[#F7C51E] via-amber-400 to-[#F7C51E] hover:from-amber-400 hover:to-amber-500 text-slate-950 font-display font-black text-sm rounded-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 cursor-pointer whitespace-nowrap ring-4 ring-amber-400/25 group"
              >
                <mat-icon class="!text-xl text-[#082B5C] group-hover:rotate-12 transition-transform">card_giftcard</mat-icon>
                <span>BAIXAR 5 MAPAS ENEM GRÁTIS</span>
                <span class="text-[10px] bg-[#082B5C] text-[#F7C51E] px-2 py-0.5 rounded-md font-extrabold uppercase">PDF</span>
              </a>

              <a
                routerLink="/enem-2026"
                class="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#082B5C] hover:bg-[#0D4F91] text-white font-display font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
              >
                <span>COMBO 150 MAPAS ENEM</span>
                <mat-icon class="!text-lg text-[#F7C51E]">bolt</mat-icon>
              </a>
            </div>

            <!-- Free Gift Highlight Note -->
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold mb-8">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>🎁 Amostra 100% gratuita das 5 áreas disponível para download imediato em PDF!</span>
            </div>

            <!-- Value Perks / Trust Checklist -->
            <div class="pt-6 border-t border-slate-200/80 w-full grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-1.5 font-medium">
                <mat-icon class="!text-base !w-4 !h-4 text-emerald-600 shrink-0">check_circle</mat-icon>
                <span>Acesso imediato</span>
              </div>
              <div class="flex items-center gap-1.5 font-medium">
                <mat-icon class="!text-base !w-4 !h-4 text-emerald-600 shrink-0">check_circle</mat-icon>
                <span>PDF pronto para imprimir</span>
              </div>
              <div class="flex items-center gap-1.5 font-medium">
                <mat-icon class="!text-base !w-4 !h-4 text-emerald-600 shrink-0">check_circle</mat-icon>
                <span>No celular ou PC</span>
              </div>
            </div>
          </div>

          <!-- 55% Realistic Mockup Composition (7 cols out of 12) -->
          <div class="lg:col-span-7 relative">
            <div class="relative mx-auto max-w-2xl lg:max-w-none">
              <!-- Primary Showcase Hero Mockup -->
              <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white group">
                <img
                  src="/assets/images/combo-enem.png"
                  alt="ENEM 2026 em Mapas Mentais com 150 Mapas e Simulado de 40 Questões da Mappia"
                  referrerpolicy="no-referrer"
                  class="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                />

                <!-- Floating Product Focus Badge Card -->
                <div class="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-slate-200/90 flex items-center gap-3.5">
                  <div class="w-12 h-12 rounded-lg bg-[#082B5C] flex items-center justify-center text-[#F7C51E] shrink-0 font-bold">
                    <mat-icon class="!text-2xl">auto_stories</mat-icon>
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-1.5">
                      <span class="text-[10px] font-bold uppercase tracking-wider text-[#0D4F91] bg-[#EAF3FC] px-1.5 py-0.2 rounded">
                        150 MAPAS + SIMULADO
                      </span>
                      <span class="text-[11px] text-slate-500 font-medium">Edição 2026</span>
                    </div>
                    <div class="text-xs font-bold text-slate-900 truncate">
                      ENEM 2026: 150 Mapas + Simulado
                    </div>
                    <div class="text-[11px] text-slate-600 mt-0.5 flex items-center justify-between">
                      <span class="font-mono font-bold text-[#082B5C]">R$ 19,99</span>
                      <a routerLink="/produto/enem-2026-mapas-e-simulado" class="text-[#0D4F91] hover:underline font-semibold text-[11px]">
                        Ver detalhes →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Secondary Floating Accent Card: Biology / Formula Leaflet Preview -->
              <div class="hidden sm:block absolute -top-6 -right-6 bg-white p-3.5 rounded-xl shadow-lg border border-slate-200/90 max-w-xs transform rotate-2 hover:rotate-0 transition-transform">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs">
                    98%
                  </div>
                  <div>
                    <div class="text-xs font-bold text-slate-800">Retenção Acelerada</div>
                    <div class="text-[11px] text-slate-500">Fixação visual por repetição</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class Hero {
  readonly freePdfUrl = FREE_ENEM_PDF_URL;
}
