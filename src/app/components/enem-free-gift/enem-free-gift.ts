import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FREE_ENEM_DRIVE_URL } from '../../data/products.data';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-enem-free-gift',
  imports: [MatIconModule],
  template: `
    <section id="enem-brinde-gratis" class="py-16 bg-gradient-to-b from-[#082B5C] via-[#0B3975] to-[#082B5C] text-white relative overflow-hidden border-y border-amber-400/20">
      <!-- Glow & background pattern -->
      <div class="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]"></div>
      <div class="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Image Column (5 or 6 cols) -->
          <div class="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div class="relative max-w-md w-full">
              <!-- Glow behind book -->
              <div class="absolute -inset-2 bg-gradient-to-r from-amber-400/30 to-blue-400/20 rounded-3xl blur-xl"></div>
              
              <div class="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-[#082B5C] group">
                <img
                  [src]="giftImage()"
                  alt="Mappia ENEM 2026 Brinde Gratuito - 5 Mapas Mentais para o ENEM"
                  referrerpolicy="no-referrer"
                  class="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-500"
                />

                <!-- Floating 100% Grátis Stamp -->
                <div class="absolute top-4 right-4 bg-[#F7C51E] text-slate-950 font-black text-xs px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 uppercase tracking-wider">
                  <mat-icon class="!text-sm !w-4 !h-4 text-[#082B5C]">redeem</mat-icon>
                  <span>100% Gratuito</span>
                </div>

                <!-- Floating Format Pill -->
                <div class="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-lg border border-white/10 flex items-center gap-1.5">
                  <mat-icon class="!text-xs text-amber-400">picture_as_pdf</mat-icon>
                  <span>PDF Pronto para Imprimir</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Content Column (7 cols) -->
          <div class="lg:col-span-7 order-1 lg:order-2">
            <!-- Top Badges -->
            <div class="flex flex-wrap items-center gap-2 mb-4">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7C51E] text-slate-950 text-xs font-black uppercase tracking-wider shadow-sm">
                <mat-icon class="!text-sm !w-4 !h-4 text-[#082B5C]">card_giftcard</mat-icon>
                <span>Brinde Gratuito</span>
              </span>
              <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-semibold backdrop-blur-xs border border-white/10">
                <mat-icon class="!text-sm !w-4 !h-4 text-emerald-400">check_circle</mat-icon>
                <span>Acesso Imediato pelo Google Drive</span>
              </span>
            </div>

            <!-- Headline -->
            <h2 class="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-3">
              5 MAPAS MENTAIS PARA O ENEM 2026
            </h2>

            <p class="font-display font-bold text-base sm:text-lg text-[#F7C51E] mb-4">
              Conteúdos essenciais das 5 áreas para você revisar de forma visual e inteligente.
            </p>

            <p class="text-sm text-slate-200 leading-relaxed mb-6 max-w-2xl">
              Preparamos uma amostra oficial com 5 mapas estratégicos cobrindo os tópicos que mais caem na prova. Estude, revise, fixe e evolua sem pagar absolutamente nada.
            </p>

            <!-- 5 Included Topics -->
            <div class="bg-white/5 border border-white/10 rounded-2xl p-5 mb-8 backdrop-blur-xs max-w-2xl">
              <div class="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                <mat-icon class="!text-base text-amber-400">checklist</mat-icon>
                <span>O que você vai receber gratuitamente no PDF:</span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-100">
                <div class="flex items-center gap-2">
                  <span class="w-6 h-6 rounded-md bg-blue-500/20 text-blue-300 font-bold flex items-center justify-center shrink-0 text-[10px]">01</span>
                  <span><strong>Matemática:</strong> Porcentagem no ENEM</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="w-6 h-6 rounded-md bg-amber-500/20 text-amber-300 font-bold flex items-center justify-center shrink-0 text-[10px]">02</span>
                  <span><strong>Ciências Humanas:</strong> Revolução Industrial</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center shrink-0 text-[10px]">03</span>
                  <span><strong>Ciências da Natureza:</strong> Ecologia no ENEM</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="w-6 h-6 rounded-md bg-purple-500/20 text-purple-300 font-bold flex items-center justify-center shrink-0 text-[10px]">04</span>
                  <span><strong>Linguagens:</strong> Interpretação de Texto</span>
                </div>
                <div class="flex items-center gap-2 sm:col-span-2">
                  <span class="w-6 h-6 rounded-md bg-rose-500/20 text-rose-300 font-bold flex items-center justify-center shrink-0 text-[10px]">05</span>
                  <span><strong>Redação:</strong> Estrutura Completa & 5 Competências</span>
                </div>
              </div>
            </div>

            <!-- Features Highlights -->
            <div class="flex flex-wrap items-center gap-4 text-xs text-slate-300 mb-8">
              <div class="flex items-center gap-1.5">
                <mat-icon class="!text-base text-emerald-400">verified</mat-icon>
                <span>Conteúdo visual e objetivo</span>
              </div>
              <div class="flex items-center gap-1.5">
                <mat-icon class="!text-base text-emerald-400">verified</mat-icon>
                <span>Ideal para revisão</span>
              </div>
              <div class="flex items-center gap-1.5">
                <mat-icon class="!text-base text-emerald-400">verified</mat-icon>
                <span>Foco no que mais cai</span>
              </div>
            </div>

            <!-- Action Button: BAIXAR PDF GRÁTIS -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                [href]="driveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#F7C51E] hover:bg-amber-400 text-slate-950 font-display font-black text-sm sm:text-base rounded-2xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 cursor-pointer uppercase tracking-wider"
              >
                <mat-icon class="!text-xl text-[#082B5C]">download</mat-icon>
                <span>BAIXAR PDF GRÁTIS</span>
              </a>

              <div class="flex items-center gap-2 text-xs text-slate-300">
                <mat-icon class="!text-lg text-emerald-400">cloud_download</mat-icon>
                <span>Download seguro e direto pelo Google Drive</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class EnemFreeGift {
  readonly giftImage = input<string>('/assets/images/enem-brinde.png');
  readonly driveUrl = FREE_ENEM_DRIVE_URL;
}
