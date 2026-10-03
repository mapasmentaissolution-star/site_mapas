import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-mindmap-spotlight',
  imports: [RouterLink, MatIconModule],
  template: `
    <section class="py-20 bg-white border-b border-slate-200/60 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <!-- Left: Visual composition of mind map pages & interactive zoom trigger -->
          <div class="lg:col-span-7 relative">
            <div class="relative mx-auto max-w-xl">
              <!-- Main Visual Image Showcase -->
              <button
                type="button"
                (click)="openPreview()"
                class="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group cursor-pointer text-left w-full p-0 block"
              >
                <img
                  src="/assets/images/mockup_enem_mapas_1790955321600.jpg"
                  alt="Amostra de página de mapa mental Mappia com ramificações estruturadas"
                  referrerpolicy="no-referrer"
                  class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                />

                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <div class="flex items-center justify-between w-full text-white">
                    <div>
                      <span class="text-xs font-semibold text-[#F7C51E] uppercase tracking-wider block">Visualização Real</span>
                      <h4 class="font-display font-bold text-base">Clique para expandir o mapa de amostra</h4>
                    </div>
                    <span class="p-2.5 rounded-xl bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors">
                      <mat-icon class="!text-xl">zoom_in</mat-icon>
                    </span>
                  </div>
                </div>
              </button>

              <!-- Secondary Overlapping Card -->
              <div class="hidden sm:flex absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-200 max-w-xs items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-[#EAF3FC] text-[#0D4F91] flex items-center justify-center shrink-0">
                  <mat-icon class="!text-xl">psychology</mat-icon>
                </div>
                <div class="text-xs">
                  <div class="font-bold text-slate-800">Associação Cognitiva</div>
                  <div class="text-slate-500 text-[11px]">Cores direcionadas por área do conhecimento</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Text Content & Value Proposition -->
          <div class="lg:col-span-5 flex flex-col items-start">
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF3FC] text-[#0D4F91] text-xs font-bold uppercase tracking-wider mb-4">
              <mat-icon class="!text-sm !w-4 !h-4 text-[#F7C51E]">visibility</mat-icon>
              <span>Design Instrucional de Alto Nível</span>
            </div>

            <h2 class="font-display font-black text-3xl sm:text-4xl text-[#082B5C] tracking-tight leading-tight mb-5">
              APRENDER PODE SER MAIS VISUAL
            </h2>

            <p class="text-base text-slate-600 leading-relaxed mb-6 font-normal">
              Transformamos conteúdos extensos em estruturas visuais organizadas para facilitar sua compreensão, revisão e memorização.
            </p>

            <div class="space-y-3.5 mb-8 w-full">
              <div class="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F8FA] border border-slate-200/60">
                <mat-icon class="!text-xl text-[#0D4F91] shrink-0 mt-0.5">check_circle</mat-icon>
                <div class="text-xs text-slate-700">
                  <strong class="font-bold text-slate-900 block mb-0.5">Hierarquia Conceitual Clara</strong>
                  Os tópicos principais ramificam-se em subtemas com destaque para fórmulas, exceções e palavras-chave.
                </div>
              </div>

              <div class="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F8FA] border border-slate-200/60">
                <mat-icon class="!text-xl text-[#0D4F91] shrink-0 mt-0.5">check_circle</mat-icon>
                <div class="text-xs text-slate-700">
                  <strong class="font-bold text-slate-900 block mb-0.5">Otimizado para Telas e Impressão</strong>
                  Diagramação testada para excelente legibilidade em smartphones, tablets ou impressos em folha A4.
                </div>
              </div>
            </div>

            <a
              routerLink="/mapas-mentais"
              class="inline-flex items-center gap-2 px-6 py-3.5 bg-[#082B5C] hover:bg-[#0D4F91] text-white font-display font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              <span>EXPLORAR MAPAS MENTAIS</span>
              <mat-icon class="!text-base">arrow_forward</mat-icon>
            </a>
          </div>
        </div>
      </div>

      <!-- Sample Zoom Lightbox Modal -->
      @if (isPreviewOpen()) {
        <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
          <!-- Backdrop button -->
          <button
            type="button"
            aria-label="Fechar visualização"
            (click)="closePreview()"
            class="fixed inset-0 bg-black/80 backdrop-blur-xs w-full h-full border-0 p-0 cursor-default"
          ></button>

          <div class="relative bg-white rounded-2xl max-w-3xl w-full p-4 overflow-hidden shadow-2xl z-10">
            <div class="flex items-center justify-between pb-3 mb-2 border-b border-slate-200">
              <div class="flex items-center gap-2">
                <mat-icon class="text-[#082B5C]">visibility</mat-icon>
                <span class="font-display font-bold text-slate-800 text-sm">Amostra do Mapa Mental Mappia</span>
              </div>
              <button
                type="button"
                (click)="closePreview()"
                class="p-1 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <mat-icon>close</mat-icon>
              </button>
            </div>

            <div class="rounded-xl overflow-hidden bg-slate-50 border border-slate-200">
              <img
                src="/assets/images/mockup_enem_mapas_1790955321600.jpg"
                alt="Zoom no mapa mental"
                class="w-full max-h-[70vh] object-contain"
              />
            </div>

            <div class="flex items-center justify-between pt-3 mt-2 text-xs text-slate-500">
              <span>Formato A4 Vetorial de Alta Fidelidade (300 DPI)</span>
              <a
                routerLink="/produto/enem-2026-mapas-e-simulado"
                (click)="closePreview()"
                class="font-bold text-[#0D4F91] hover:underline"
              >
                Adquirir combo oficial 150 mapas + simulado →
              </a>
            </div>
          </div>
        </div>
      }
    </section>
  `
})
export class MindmapSpotlight {
  readonly isPreviewOpen = signal<boolean>(false);

  openPreview(): void {
    this.isPreviewOpen.set(true);
  }

  closePreview(): void {
    this.isPreviewOpen.set(false);
  }
}
