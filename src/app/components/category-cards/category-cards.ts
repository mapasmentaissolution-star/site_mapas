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

          <!-- Concursos/Vestibulares -->
          <div class="group relative flex flex-col justify-between p-6 rounded-3xl border border-slate-200/80 bg-[#F6F8FA] hover:bg-white hover:border-amber-400/40 hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 rounded-2xl bg-white border border-slate-200/60 shadow-xs flex items-center justify-center text-[#082B5C] group-hover:bg-[#082B5C] group-hover:text-[#F7C51E] transition-colors">
                  <mat-icon class="!text-2xl">school</mat-icon>
                </div>
                <span class="text-[11px] font-bold tracking-wider uppercase text-emerald-900 bg-emerald-100 px-2.5 py-1 rounded-md border border-emerald-300 flex items-center gap-1">
                  <mat-icon class="!text-xs !w-3.5 !h-3.5 text-emerald-700">check_circle</mat-icon>
                  <span>Materiais disponíveis</span>
                </span>
              </div>

              <h3 class="font-display font-black text-slate-900 text-lg mb-2 group-hover:text-[#0D4F91] transition-colors">
                Concursos/Vestibulares
              </h3>

              <p class="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                Simulados e materiais para concursos e vestibulares, incluindo ETEC e DETRAN-SP 2026.
              </p>
            </div>

            <div class="pt-4 border-t border-slate-200/60 flex items-center justify-between">
              <span class="text-xs font-bold text-emerald-700 font-mono">DETRAN-SP 2026 em destaque</span>
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
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 rounded-2xl bg-white border border-slate-200/60 shadow-xs flex items-center justify-center text-[#082B5C] group-hover:bg-[#082B5C] group-hover:text-[#F7C51E] transition-colors">
                  <mat-icon class="!text-2xl">language</mat-icon>
                </div>
                <span class="text-[11px] font-bold tracking-wider uppercase text-emerald-900 bg-emerald-100 px-2.5 py-1 rounded-md border border-emerald-300 flex items-center gap-1">
                  <mat-icon class="!text-xs !w-3.5 !h-3.5 text-emerald-700">check_circle</mat-icon>
                  <span>Disponível</span>
                </span>
              </div>

              <h3 class="font-display font-black text-slate-900 text-lg mb-2 group-hover:text-[#0D4F91] transition-colors">
                Inglês
              </h3>

              <p class="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                Inglês do Zero em Mapas Mentais — Volume 1 com materiais bônus.
              </p>
            </div>

            <div class="pt-4 border-t border-slate-200/60 flex items-center justify-between">
              <span class="text-xs font-bold text-emerald-700 font-mono">Volume 1 + bônus disponível</span>
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
          <div class="group relative flex flex-col justify-between p-6 rounded-3xl border border-slate-200/80 bg-[#F6F8FA] hover:bg-white hover:border-[#0D4F91]/40 hover:shadow-lg transition-all duration-300">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 rounded-2xl bg-white border border-slate-200/60 shadow-xs flex items-center justify-center text-[#082B5C] group-hover:bg-[#082B5C] group-hover:text-[#F7C51E] transition-colors">
                  <mat-icon class="!text-2xl">terminal</mat-icon>
                </div>
                <span class="text-[11px] font-bold tracking-wider uppercase text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md border border-emerald-300 flex items-center gap-1">
                  <mat-icon class="!text-xs !w-3.5 !h-3.5 text-emerald-700">check_circle</mat-icon>
                  <span>Disponível</span>
                </span>
              </div>

              <h3 class="font-display font-black text-slate-900 text-lg mb-2 group-hover:text-[#0D4F91] transition-colors">
                Programação
              </h3>

              <p class="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                20 mapas mentais para aprender lógica de programação, dos fundamentos à resolução prática de problemas.
              </p>

              <div class="text-[11px] text-slate-700 bg-white border border-slate-200/80 rounded-lg px-2.5 py-1 mb-2 font-medium">
                Edição 2026/2027 · PDF Digital
              </div>
            </div>

            <div class="pt-4 border-t border-slate-200/60 flex items-center justify-between">
              <span class="text-xs font-bold text-emerald-700 font-mono">A partir de R$ 14,99</span>
              <a
                routerLink="/programacao"
                class="inline-flex items-center gap-1 text-xs font-bold text-[#0D4F91] hover:text-[#082B5C]"
              >
                <span>Acessar</span>
                <mat-icon class="!text-base">arrow_forward</mat-icon>
              </a>
            </div>
          </div>

          <!-- Mappia Mini -->
          <div class="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-amber-300 bg-gradient-to-br from-amber-50 via-white to-yellow-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg">
            <div class="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-200/40 transition-transform group-hover:scale-125"></div>
            <div class="relative">
              <div class="mb-4 flex items-center justify-between gap-3">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-200 bg-white text-amber-700 shadow-xs">
                  <mat-icon class="!text-2xl">auto_awesome</mat-icon>
                </div>
                <span class="rounded-xl border-2 border-amber-400 bg-[#F7C51E] px-3 py-1.5 text-center text-[10px] font-black uppercase leading-tight tracking-wider text-[#082B5C] shadow-md">
                  Todos por<br /><strong class="text-base">R$ 9,99</strong>
                </span>
              </div>

              <h3 class="mb-2 font-display text-lg font-black text-slate-900 transition-colors group-hover:text-amber-800">
                Mappia Mini
              </h3>

              <p class="mb-4 line-clamp-3 text-xs leading-relaxed text-slate-600">
                Mapas mentais práticos e acessíveis. Comece pela Culinária e explore novas categorias em breve.
              </p>

              <div class="mb-2 rounded-lg border border-amber-200 bg-white/80 px-2.5 py-1 text-[11px] font-medium text-amber-900">
                Culinária · Artesanato · Informática
              </div>
            </div>

            <div class="relative flex items-center justify-between border-t border-amber-200/80 pt-4">
              <span class="font-mono text-xs font-bold text-amber-800">5 mapas de Culinária disponíveis</span>
              <a
                routerLink="/mappia-mini"
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
