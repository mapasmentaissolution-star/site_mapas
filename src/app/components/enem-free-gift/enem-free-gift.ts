import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FREE_ENEM_PDF_URL } from '../../data/products.data';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-enem-free-gift',
  imports: [MatIconModule],
  template: `
    <section id="enem-brinde-gratis" class="py-20 bg-gradient-to-b from-[#082B5C] via-[#0D386E] to-[#082B5C] text-white relative overflow-hidden border-y-4 border-[#F7C51E] shadow-2xl">
      <!-- Glow & background pattern -->
      <div class="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div class="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#F7C51E]/15 blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Top Super Highlight Banner Tag -->
        <div class="text-center mb-8">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F7C51E] text-slate-950 font-display font-black text-xs sm:text-sm uppercase tracking-widest shadow-lg animate-bounce">
            <mat-icon class="!text-base text-[#082B5C]">stars</mat-icon>
            <span>PRESENTE EXCLUSIVO MAPPIA • 100% GRATUITO</span>
            <mat-icon class="!text-base text-[#082B5C]">stars</mat-icon>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Image Column (5 cols) -->
          <div class="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div class="relative max-w-md w-full">
              <!-- Animated Glow behind book -->
              <div class="absolute -inset-3 bg-gradient-to-r from-[#F7C51E]/40 via-amber-300/30 to-emerald-400/30 rounded-3xl blur-2xl animate-pulse"></div>
              
              <div class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30 bg-[#082B5C] group ring-8 ring-amber-400/20">
                <img
                  [src]="giftImage()"
                  alt="Mappia ENEM 2026 Brinde Gratuito - 5 Mapas Mentais para o ENEM"
                  referrerpolicy="no-referrer"
                  class="w-full h-auto object-cover transform group-hover:scale-103 transition-transform duration-500"
                />

                <!-- Floating 100% Grátis Stamp -->
                <div class="absolute top-4 right-4 bg-[#F7C51E] text-slate-950 font-black text-xs sm:text-sm px-4 py-2 rounded-full shadow-2xl flex items-center gap-1.5 uppercase tracking-wider border-2 border-white">
                  <mat-icon class="!text-base text-[#082B5C]">redeem</mat-icon>
                  <span>100% GRATUITO</span>
                </div>

                <!-- Floating Format Pill -->
                <div class="absolute bottom-4 left-4 bg-slate-950/90 backdrop-blur-md text-white text-xs font-bold px-3.5 py-1.5 rounded-xl border border-white/20 flex items-center gap-1.5 shadow-lg">
                  <mat-icon class="!text-sm text-amber-400">picture_as_pdf</mat-icon>
                  <span>PDF Alta Definição (300 DPI)</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Content Column (7 cols) -->
          <div class="lg:col-span-7 order-1 lg:order-2">
            <!-- Top Badges -->
            <div class="flex flex-wrap items-center gap-2.5 mb-4">
              <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F7C51E] text-slate-950 text-xs font-black uppercase tracking-wider shadow-md">
                <mat-icon class="!text-sm !w-4 !h-4 text-[#082B5C]">card_giftcard</mat-icon>
                <span>BRINDE OFICIAL ENEM 2026</span>
              </span>
              <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/40">
                <mat-icon class="!text-sm !w-4 !h-4 text-emerald-400">verified</mat-icon>
                <span>Envio Direto pelo WhatsApp</span>
              </span>
              <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-semibold">
                <span>100% Gratuito</span>
              </span>
            </div>

            <!-- Headline -->
            <h2 class="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-3">
              5 MAPAS MENTAIS PARA O ENEM 2026
            </h2>

            <p class="font-display font-bold text-lg sm:text-xl text-[#F7C51E] mb-4">
              Conteúdos essenciais das 5 áreas para você revisar de forma visual e inteligente.
            </p>

            <p class="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 max-w-2xl">
              Criamos esta amostra premium para você sentir o poder da nossa metodologia visual na prática. São 5 mapas estruturados dos temas que mais caem na prova, prontos para salvar no celular ou imprimir em folha A4.
            </p>

            <!-- 5 Included Topics -->
            <div class="bg-slate-950/40 border-2 border-white/15 rounded-2xl p-5 mb-8 backdrop-blur-md max-w-2xl shadow-xl">
              <div class="text-xs font-black uppercase tracking-wider text-amber-400 mb-3.5 flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <mat-icon class="!text-base">checklist</mat-icon>
                  <span>Conteúdos Inclusos no Arquivo PDF:</span>
                </div>
                <span class="text-[11px] text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/40">Completo</span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-100">
                <div class="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5">
                  <span class="w-6 h-6 rounded-lg bg-blue-500 text-white font-black flex items-center justify-center shrink-0 text-[10px]">01</span>
                  <span><strong>Matemática:</strong> Porcentagem no ENEM</span>
                </div>
                <div class="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5">
                  <span class="w-6 h-6 rounded-lg bg-amber-500 text-slate-950 font-black flex items-center justify-center shrink-0 text-[10px]">02</span>
                  <span><strong>Humanas:</strong> Revolução Industrial</span>
                </div>
                <div class="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5">
                  <span class="w-6 h-6 rounded-lg bg-emerald-500 text-white font-black flex items-center justify-center shrink-0 text-[10px]">03</span>
                  <span><strong>Natureza:</strong> Ecologia no ENEM</span>
                </div>
                <div class="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5">
                  <span class="w-6 h-6 rounded-lg bg-purple-500 text-white font-black flex items-center justify-center shrink-0 text-[10px]">04</span>
                  <span><strong>Linguagens:</strong> Interpretação de Texto</span>
                </div>
                <div class="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5 sm:col-span-2">
                  <span class="w-6 h-6 rounded-lg bg-rose-500 text-white font-black flex items-center justify-center shrink-0 text-[10px]">05</span>
                  <span><strong>Redação:</strong> Estrutura em 4 Parágrafos & 5 Competências</span>
                </div>
              </div>
            </div>

            <!-- Features Highlights -->
            <div class="flex flex-wrap items-center gap-4 text-xs text-slate-300 mb-8">
              <div class="flex items-center gap-1.5 font-medium">
                <mat-icon class="!text-base text-emerald-400">check_circle</mat-icon>
                <span>Conteúdo visual e direto</span>
              </div>
              <div class="flex items-center gap-1.5 font-medium">
                <mat-icon class="!text-base text-emerald-400">check_circle</mat-icon>
                <span>Ideal para revisão ativa</span>
              </div>
              <div class="flex items-center gap-1.5 font-medium">
                <mat-icon class="!text-base text-emerald-400">check_circle</mat-icon>
                <span>Foco no que mais cai</span>
              </div>
            </div>

            <!-- Action Button: RECEBER MATERIAL GRATUITO -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                [href]="driveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 font-display font-black text-sm sm:text-base rounded-2xl transition-all shadow-2xl hover:shadow-emerald-500/30 hover:-translate-y-1 cursor-pointer uppercase tracking-wider ring-4 ring-white/20 group"
              >
                <svg class="w-6 h-6 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.077-2.022-.472-1.688-.7-2.775-2.42-2.859-2.533-.084-.113-.683-.907-.683-1.731 0-.824.432-1.229.586-1.398.154-.17.336-.212.449-.212.112 0 .225.001.323.006.103.005.241-.039.377.29.144.35.488 1.19.531 1.277.043.088.072.19.014.305-.058.115-.088.187-.174.288-.087.101-.183.226-.261.304-.087.087-.178.182-.077.355.101.174.45 1.741 1.543 2.128.324.115.597.184.802.249.325.103.621.089.855.054.261-.039.805-.329.919-.646.114-.317.114-.588.08-.646-.034-.058-.124-.093-.268-.164z"/>
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.05 22l4.982-1.307A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.167c-1.614 0-3.12-.442-4.417-1.211l-.317-.188-2.969.779.792-2.894-.207-.329A8.132 8.132 0 013.833 12c0-4.503 3.664-8.167 8.167-8.167 4.503 0 8.167 3.664 8.167 8.167 0 4.503-3.664 8.167-8.167 8.167z"/>
                </svg>
                <span>QUERO RECEBER MEU MATERIAL GRATUITO</span>
              </a>

              <div class="flex flex-col text-xs text-slate-300">
                <div class="flex items-center gap-1.5 font-semibold text-emerald-400">
                  <mat-icon class="!text-base">chat</mat-icon>
                  <span>Envio imediato pelo WhatsApp</span>
                </div>
                <span class="text-[11px] text-slate-400">Clique para solicitar o material sem custo nenhum</span>
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
  readonly driveUrl = FREE_ENEM_PDF_URL;
}
