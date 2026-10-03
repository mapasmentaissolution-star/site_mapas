import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-method',
  imports: [MatIconModule],
  template: `
    <section class="py-16 bg-[#F6F8FA] border-b border-slate-200/60 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center max-w-xl mx-auto mb-14">
          <span class="text-xs font-bold uppercase tracking-wider text-[#0D4F91] block mb-1">
            Metodologia Científica
          </span>
          <h2 class="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight mb-2">
            NOSSO MÉTODO É SIMPLES E EFICAZ
          </h2>
          <p class="text-sm text-slate-600">
            Estude em 3 passos e veja a diferença nos seus resultados.
          </p>
        </div>

        <!-- 3 Step Sequence with Connecting Line -->
        <div class="relative max-w-4xl mx-auto">
          <!-- Connecting Line behind steps on desktop -->
          <div class="hidden md:block absolute top-12 left-20 right-20 h-0.5 bg-slate-300 z-0"></div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <!-- Step 1 -->
            <div class="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-[#0D4F91]/40 transition-colors">
              <div class="w-16 h-16 rounded-2xl bg-[#082B5C] text-white flex items-center justify-center font-display font-extrabold text-xl mb-4 shadow-md ring-4 ring-[#EAF3FC]">
                01
              </div>
              <span class="text-[11px] font-bold uppercase tracking-wider text-[#0D4F91] mb-1">Passo 1</span>
              <h3 class="font-display font-black text-slate-900 text-lg mb-2">
                APRENDA
              </h3>
              <p class="text-xs text-slate-600 leading-relaxed">
                Entenda o conteúdo de forma visual e simplificada através de relações conceituais lógicas e intuitivas.
              </p>
            </div>

            <!-- Step 2 -->
            <div class="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-[#0D4F91]/40 transition-colors">
              <div class="w-16 h-16 rounded-2xl bg-[#0D4F91] text-white flex items-center justify-center font-display font-extrabold text-xl mb-4 shadow-md ring-4 ring-[#EAF3FC]">
                02
              </div>
              <span class="text-[11px] font-bold uppercase tracking-wider text-[#0D4F91] mb-1">Passo 2</span>
              <h3 class="font-display font-black text-slate-900 text-lg mb-2">
                REVISE
              </h3>
              <p class="text-xs text-slate-600 leading-relaxed">
                Revise os principais pontos com mais rapidez antes das provas ou simulados, reativando a memória de curto prazo.
              </p>
            </div>

            <!-- Step 3 -->
            <div class="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-[#0D4F91]/40 transition-colors">
              <div class="w-16 h-16 rounded-2xl bg-[#F7C51E] text-[#082B5C] flex items-center justify-center font-display font-extrabold text-xl mb-4 shadow-md ring-4 ring-[#EAF3FC]">
                03
              </div>
              <span class="text-[11px] font-bold uppercase tracking-wider text-[#0D4F91] mb-1">Passo 3</span>
              <h3 class="font-display font-black text-slate-900 text-lg mb-2">
                MEMORIZE
              </h3>
              <p class="text-xs text-slate-600 leading-relaxed">
                Associe melhor as informações e estude com mais confiança através de gatilhos visuais e âncoras mnemônicas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class Method {}
