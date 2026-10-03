import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-enem-special',
  imports: [RouterLink, MatIconModule],
  template: `
    <section class="py-18 bg-[#082B5C] text-white relative overflow-hidden">
      <!-- Background subtle grid effect -->
      <div class="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <!-- Left: Information & 5 Knowledge Areas -->
          <div class="lg:col-span-7">
            <!-- Badge -->
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7C51E] text-[#082B5C] text-xs font-black uppercase tracking-wider mb-4">
              <mat-icon class="!text-sm !w-4 !h-4">star</mat-icon>
              <span>EDIÇÃO OFICIAL ATUALIZADA</span>
            </div>

            <!-- Title -->
            <h2 class="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-none mb-3">
              ENEM 2026
            </h2>

            <!-- Subtitle -->
            <p class="font-display font-bold text-lg sm:text-xl text-[#F7C51E] mb-6 tracking-wide">
              150 MAPAS MENTAIS + SIMULADO FINAL 40 QUESTÕES
            </p>

            <p class="text-sm text-slate-300 max-w-xl mb-8 leading-relaxed">
              O compilado definitivo para dominar os temas mais cobrados nas 5 áreas do exame com didática direta e foco em retenção de longo prazo. Aprenda. Revise. Memorize.
            </p>

            <!-- 5 Knowledge Areas Pills / Badges -->
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 max-w-xl">
              <div class="p-3 rounded-xl bg-white/10 border border-white/10 flex items-center gap-2.5">
                <mat-icon class="text-[#F7C51E] !text-lg">calculate</mat-icon>
                <span class="text-xs font-bold tracking-wide">MATEMÁTICA</span>
              </div>

              <div class="p-3 rounded-xl bg-white/10 border border-white/10 flex items-center gap-2.5">
                <mat-icon class="text-[#F7C51E] !text-lg">public</mat-icon>
                <span class="text-xs font-bold tracking-wide">CIÊNCIAS HUMANAS</span>
              </div>

              <div class="p-3 rounded-xl bg-white/10 border border-white/10 flex items-center gap-2.5">
                <mat-icon class="text-[#F7C51E] !text-lg">science</mat-icon>
                <span class="text-xs font-bold tracking-wide">CIÊNCIAS DA NATUREZA</span>
              </div>

              <div class="p-3 rounded-xl bg-white/10 border border-white/10 flex items-center gap-2.5">
                <mat-icon class="text-[#F7C51E] !text-lg">translate</mat-icon>
                <span class="text-xs font-bold tracking-wide">LINGUAGENS</span>
              </div>

              <div class="p-3 rounded-xl bg-white/10 border border-white/10 flex items-center gap-2.5 sm:col-span-2">
                <mat-icon class="text-[#F7C51E] !text-lg">edit_note</mat-icon>
                <span class="text-xs font-bold tracking-wide">REDAÇÃO NOTA 1000</span>
              </div>
            </div>

            <!-- Slogan Highlight -->
            <div class="text-sm font-display font-semibold text-slate-200 mb-6 italic flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#F7C51E]"></span>
              <span>Aprenda. Revise. Memorize.</span>
            </div>

            <!-- Button CTA -->
            <a
              routerLink="/produto/enem-2026-mapas-e-simulado"
              class="inline-flex items-center gap-2 px-8 py-4 bg-[#F7C51E] hover:bg-amber-400 text-[#082B5C] font-display font-black text-sm rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
            >
              <span>CONHECER O MATERIAL</span>
              <mat-icon class="!text-lg">arrow_forward</mat-icon>
            </a>
          </div>

          <!-- Right: Mockup Grande do Produto -->
          <div class="lg:col-span-5">
            <div class="relative max-w-md mx-auto">
              <div class="rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-white">
                <img
                  src="/assets/images/mockup_combo_enem_1790993357131.jpg"
                  alt="ENEM 2026: 150 Mapas Mentais mais Simulado Oficial da Mappia"
                  referrerpolicy="no-referrer"
                  class="w-full h-auto object-cover"
                />
              </div>

              <!-- Price Tag floating overlay -->
              <div class="absolute -bottom-4 right-4 bg-white text-[#082B5C] px-4 py-2 rounded-xl shadow-xl border border-slate-200 font-mono">
                <span class="text-[10px] text-slate-500 block uppercase font-sans font-bold">Por apenas</span>
                <span class="text-xl font-black">R$ 19,99</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class EnemSpecial {}
