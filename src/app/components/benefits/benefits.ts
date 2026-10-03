import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-benefits',
  imports: [MatIconModule],
  template: `
    <section class="py-16 bg-white border-b border-slate-200/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center max-w-xl mx-auto mb-12">
          <span class="text-xs font-bold uppercase tracking-wider text-[#0D4F91] block mb-1">
            Diferenciais Exclusivos
          </span>
          <h2 class="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            POR QUE ESTUDAR COM A MAPPIA?
          </h2>
        </div>

        <!-- 4 Benefits Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Card 1 -->
          <div class="p-6 rounded-2xl bg-[#F6F8FA] border border-slate-200/70 hover:border-[#0D4F91]/30 transition-all hover:shadow-xs group">
            <div class="w-12 h-12 rounded-xl bg-white border border-slate-200/60 flex items-center justify-center text-[#082B5C] group-hover:bg-[#082B5C] group-hover:text-[#F7C51E] transition-colors mb-4 shadow-xs">
              <mat-icon class="!text-2xl">account_tree</mat-icon>
            </div>
            <h3 class="font-display font-bold text-slate-900 text-base mb-2">
              CONTEÚDO ORGANIZADO
            </h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Conteúdo estruturado em mapas mentais que eliminam o excesso de texto e vão direto ao que realmente importa.
            </p>
          </div>

          <!-- Card 2 -->
          <div class="p-6 rounded-2xl bg-[#F6F8FA] border border-slate-200/70 hover:border-[#0D4F91]/30 transition-all hover:shadow-xs group">
            <div class="w-12 h-12 rounded-xl bg-white border border-slate-200/60 flex items-center justify-center text-[#082B5C] group-hover:bg-[#082B5C] group-hover:text-[#F7C51E] transition-colors mb-4 shadow-xs">
              <mat-icon class="!text-2xl">speed</mat-icon>
            </div>
            <h3 class="font-display font-bold text-slate-900 text-base mb-2">
              REVISÃO MAIS RÁPIDA
            </h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Encontre os principais pontos de cada assunto em poucos segundos e economize dezenas de horas na sua preparação.
            </p>
          </div>

          <!-- Card 3 -->
          <div class="p-6 rounded-2xl bg-[#F6F8FA] border border-slate-200/70 hover:border-[#0D4F91]/30 transition-all hover:shadow-xs group">
            <div class="w-12 h-12 rounded-xl bg-white border border-slate-200/60 flex items-center justify-center text-[#082B5C] group-hover:bg-[#082B5C] group-hover:text-[#F7C51E] transition-colors mb-4 shadow-xs">
              <mat-icon class="!text-2xl">print</mat-icon>
            </div>
            <h3 class="font-display font-bold text-slate-900 text-base mb-2">
              MATERIAL PRONTO PARA IMPRIMIR
            </h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Baixe e imprima quando quiser em formato A4 de alta resolução para encadernar ou colar na parede de estudos.
            </p>
          </div>

          <!-- Card 4 -->
          <div class="p-6 rounded-2xl bg-[#F6F8FA] border border-slate-200/70 hover:border-[#0D4F91]/30 transition-all hover:shadow-xs group">
            <div class="w-12 h-12 rounded-xl bg-white border border-slate-200/60 flex items-center justify-center text-[#082B5C] group-hover:bg-[#082B5C] group-hover:text-[#F7C51E] transition-colors mb-4 shadow-xs">
              <mat-icon class="!text-2xl">flash_on</mat-icon>
            </div>
            <h3 class="font-display font-bold text-slate-900 text-base mb-2">
              ACESSO IMEDIATO
            </h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Comece a estudar logo após a confirmação da compra. Receba os links de download direto no seu e-mail.
            </p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class Benefits {}
