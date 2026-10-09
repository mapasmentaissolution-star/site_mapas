import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-category-cards',
  imports: [RouterLink, MatIconModule],
  template: `
    <section class="py-16 bg-white border-b border-slate-200/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF3FC] text-[#0D4F91] text-xs font-bold uppercase tracking-wider mb-2">
              <mat-icon class="!text-sm !w-4 !h-4 text-[#F7C51E]">category</mat-icon>
              <span>Navegue por Áreas de Conhecimento</span>
            </div>
            <h2 class="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight">
              ENCONTRE O MATERIAL IDEAL PARA VOCÊ
            </h2>
          </div>
          <div class="text-xs text-slate-500 font-medium">
            Checkout 100% Seguro pela <strong class="text-[#082B5C]">Kiwify</strong> · Liberação Instantânea em PDF
          </div>
        </div>

        <!-- Featured ENEM 2026 Hero Card (Grande Destaque) -->
        <div class="mb-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#082B5C] via-[#0D4F91] to-[#082B5C] text-white shadow-xl relative overflow-hidden border-2 border-[#F7C51E]/40 group">
          <div class="absolute -right-10 -bottom-10 w-60 h-60 rounded-full bg-white/5 pointer-events-none"></div>

          <div class="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div class="max-w-2xl">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7C51E] text-slate-900 text-xs font-black uppercase tracking-wider mb-3 shadow-xs">
                <mat-icon class="!text-sm !w-4 !h-4 text-[#082B5C]">local_fire_department</mat-icon>
                <span>GRANDE DESTAQUE • EDIÇÃO OFICIAL 2026</span>
              </div>
              <h3 class="font-display font-black text-2xl sm:text-3xl text-white mb-2 tracking-tight">
                ENEM 2026 & Vestibulares
              </h3>
              <p class="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-xl">
                Combo Completo com <strong>150 Mapas Mentais</strong> de todas as 5 áreas + <strong>Simulado Oficial de 40 Questões</strong> com gabarito comentado passo a passo e folha de respostas.
              </p>
            </div>

            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                routerLink="/enem-2026"
                class="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/20 transition-all text-center flex items-center justify-center gap-1.5"
              >
                <span>Ver Materiais do ENEM</span>
                <mat-icon class="!text-base">arrow_forward</mat-icon>
              </a>

              <a
                routerLink="/produto/enem-2026-mapas-e-simulado"
                class="px-6 py-3.5 bg-[#F7C51E] hover:bg-amber-400 text-[#082B5C] font-black text-xs rounded-xl transition-all shadow-md text-center flex items-center justify-center gap-1.5"
              >
                <mat-icon class="!text-base">bolt</mat-icon>
                <span>GARANTIR COMBO ENEM</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Horizontal 4-Column Cards Grid for Other Categories -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Bíblicos -->
          <div class="group relative flex flex-col justify-between p-6 rounded-3xl border border-slate-200/80 bg-[#F6F8FA] hover:bg-white hover:border-[#0D4F91]/40 hover:shadow-lg transition-all duration-300">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 rounded-2xl bg-white border border-slate-200/60 shadow-xs flex items-center justify-center text-[#082B5C] group-hover:bg-[#082B5C] group-hover:text-[#F7C51E] transition-colors">
                  <mat-icon class="!text-2xl">menu_book</mat-icon>
                </div>
                <span class="text-[11px] font-bold tracking-wider uppercase text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                  Estudo Bíblico
                </span>
              </div>

              <h3 class="font-display font-black text-slate-900 text-lg mb-2 group-hover:text-[#0D4F91] transition-colors">
                Bíblicos
              </h3>

              <p class="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                Estude a Bíblia de forma visual e organizada. Linha do tempo de Gênesis a Apocalipse, resumos e genealogias.
              </p>
            </div>

            <div class="pt-4 border-t border-slate-200/60 flex items-center justify-between">
              <span class="text-xs font-bold text-slate-700 font-mono">A partir de R$ 29,90</span>
              <a
                routerLink="/biblicos"
                class="inline-flex items-center gap-1 text-xs font-bold text-[#0D4F91] hover:text-[#082B5C]"
              >
                <span>Acessar</span>
                <mat-icon class="!text-base">arrow_forward</mat-icon>
              </a>
            </div>
          </div>

          <!-- Estudos & Concursos -->
          <div class="group relative flex flex-col justify-between p-6 rounded-3xl border border-slate-200/80 bg-[#F6F8FA] hover:bg-white hover:border-amber-400/40 hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div class="absolute -right-6 top-8 transform rotate-12 pointer-events-none select-none opacity-15">
              <span class="font-display font-black text-3xl text-amber-700 uppercase tracking-widest">
                EM BREVE
              </span>
            </div>

            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 rounded-2xl bg-white border border-slate-200/60 shadow-xs flex items-center justify-center text-[#082B5C] group-hover:bg-[#082B5C] group-hover:text-[#F7C51E] transition-colors">
                  <mat-icon class="!text-2xl">school</mat-icon>
                </div>
                <span class="text-[11px] font-bold tracking-wider uppercase text-amber-900 bg-amber-100 px-2.5 py-1 rounded-md border border-amber-300 flex items-center gap-1">
                  <mat-icon class="!text-xs !w-3.5 !h-3.5 text-amber-700">schedule</mat-icon>
                  <span>Em Breve</span>
                </span>
              </div>

              <h3 class="font-display font-black text-slate-900 text-lg mb-2 group-hover:text-[#0D4F91] transition-colors">
                Estudos
              </h3>

              <p class="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                Conteúdos para escola, faculdade e concursos. Técnicas mnemônicas e resumos de direito e português.
              </p>

              <div class="text-[11px] text-amber-800 bg-amber-50/80 border border-amber-200/60 rounded-lg px-2.5 py-1 mb-2 font-medium">
                ⏳ Em produção · Disponível em breve
              </div>
            </div>

            <div class="pt-4 border-t border-slate-200/60 flex items-center justify-between">
              <span class="text-xs font-bold text-amber-700 font-mono">Lançamento em breve</span>
              <a
                routerLink="/estudos"
                class="inline-flex items-center gap-1 text-xs font-bold text-[#0D4F91] hover:text-[#082B5C]"
              >
                <span>Acessar</span>
                <mat-icon class="!text-base">arrow_forward</mat-icon>
              </a>
            </div>
          </div>

          <!-- Inglês -->
          <div class="group relative flex flex-col justify-between p-6 rounded-3xl border border-slate-200/80 bg-[#F6F8FA] hover:bg-white hover:border-amber-400/40 hover:shadow-lg transition-all duration-300 overflow-hidden">
            <!-- Subtle diagonal watermark in background -->
            <div class="absolute -right-6 top-8 transform rotate-12 pointer-events-none select-none opacity-15">
              <span class="font-display font-black text-3xl text-amber-700 uppercase tracking-widest">
                EM BREVE
              </span>
            </div>

            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 rounded-2xl bg-white border border-slate-200/60 shadow-xs flex items-center justify-center text-[#082B5C] group-hover:bg-[#082B5C] group-hover:text-[#F7C51E] transition-colors">
                  <mat-icon class="!text-2xl">language</mat-icon>
                </div>
                <span class="text-[11px] font-bold tracking-wider uppercase text-amber-900 bg-amber-100 px-2.5 py-1 rounded-md border border-amber-300 flex items-center gap-1">
                  <mat-icon class="!text-xs !w-3.5 !h-3.5 text-amber-700">schedule</mat-icon>
                  <span>Em Breve</span>
                </span>
              </div>

              <h3 class="font-display font-black text-slate-900 text-lg mb-2 group-hover:text-[#0D4F91] transition-colors">
                Inglês
              </h3>

              <p class="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                Mapas mentais para aprender inglês com mais facilidade: tempos verbais, vocabulário e expressões práticas.
              </p>

              <div class="text-[11px] text-amber-800 bg-amber-50/80 border border-amber-200/60 rounded-lg px-2.5 py-1 mb-2 font-medium">
                ⏳ Em produção · Disponível em breve
              </div>
            </div>

            <div class="pt-4 border-t border-slate-200/60 flex items-center justify-between">
              <span class="text-xs font-bold text-amber-700 font-mono">Lançamento em breve</span>
              <a
                routerLink="/ingles"
                class="inline-flex items-center gap-1 text-xs font-bold text-[#0D4F91] hover:text-[#082B5C]"
              >
                <span>Acessar</span>
                <mat-icon class="!text-base">arrow_forward</mat-icon>
              </a>
            </div>
          </div>

          <!-- Programação -->
          <div class="group relative flex flex-col justify-between p-6 rounded-3xl border border-slate-200/80 bg-[#F6F8FA] hover:bg-white hover:border-amber-400/40 hover:shadow-lg transition-all duration-300 overflow-hidden">
            <!-- Subtle diagonal watermark in background -->
            <div class="absolute -right-6 top-8 transform rotate-12 pointer-events-none select-none opacity-15">
              <span class="font-display font-black text-3xl text-amber-700 uppercase tracking-widest">
                EM BREVE
              </span>
            </div>

            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 rounded-2xl bg-white border border-slate-200/60 shadow-xs flex items-center justify-center text-[#082B5C] group-hover:bg-[#082B5C] group-hover:text-[#F7C51E] transition-colors">
                  <mat-icon class="!text-2xl">terminal</mat-icon>
                </div>
                <span class="text-[11px] font-bold tracking-wider uppercase text-amber-900 bg-amber-100 px-2.5 py-1 rounded-md border border-amber-300 flex items-center gap-1">
                  <mat-icon class="!text-xs !w-3.5 !h-3.5 text-amber-700">schedule</mat-icon>
                  <span>Em Breve</span>
                </span>
              </div>

              <h3 class="font-display font-black text-slate-900 text-lg mb-2 group-hover:text-[#0D4F91] transition-colors">
                Programação
              </h3>

              <p class="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                Conceitos de programação de forma visual e simplificada: lógica, algoritmos, estruturas de dados e Python.
              </p>

              <div class="text-[11px] text-amber-800 bg-amber-50/80 border border-amber-200/60 rounded-lg px-2.5 py-1 mb-2 font-medium">
                ⏳ Em produção · Disponível em breve
              </div>
            </div>

            <div class="pt-4 border-t border-slate-200/60 flex items-center justify-between">
              <span class="text-xs font-bold text-amber-700 font-mono">Lançamento em breve</span>
              <a
                routerLink="/programacao"
                class="inline-flex items-center gap-1 text-xs font-bold text-[#0D4F91] hover:text-[#082B5C]"
              >
                <span>Acessar</span>
                <mat-icon class="!text-base">arrow_forward</mat-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class CategoryCards {}
