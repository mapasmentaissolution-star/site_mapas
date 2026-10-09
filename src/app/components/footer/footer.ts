import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { WHATSAPP_URL, WHATSAPP_PHONE_FORMATTED } from '../../data/products.data';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-footer',
  imports: [RouterLink, MatIconModule],
  template: `
    <footer class="bg-[#082B5C] text-white pt-16 pb-12 border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- 4 Columns Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <!-- Column 1: Brand & Bio (4 cols) -->
          <div class="lg:col-span-4">
            <div class="flex items-center gap-3.5 mb-5">
              <div class="bg-white p-2 rounded-2xl shadow-md inline-flex items-center justify-center">
                <img
                  src="/assets/images/mappia_official_logo_1790962795414.jpg"
                  alt="MAPPIA — Aprenda. Revise. Memorize."
                  referrerpolicy="no-referrer"
                  class="h-14 sm:h-16 w-auto object-contain rounded-xl"
                />
              </div>
            </div>

            <p class="text-xs text-slate-300 leading-relaxed max-w-sm mb-6">
              Materiais digitais de alta qualidade para estudar, revisar e memorizar conteúdos do ENEM 2026 com didática visual e foco em resultados.
            </p>

            <!-- Trust badges / Security -->
            <div class="flex items-center gap-3 text-xs text-slate-400">
              <div class="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-lg">
                <mat-icon class="!text-sm !w-4 !h-4 text-emerald-400">lock</mat-icon>
                <span class="text-[11px]">Pagamento 100% Seguro</span>
              </div>
              <div class="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-lg">
                <mat-icon class="!text-sm !w-4 !h-4 text-[#F7C51E]">verified</mat-icon>
                <span class="text-[11px]">Garantia de 7 Dias</span>
              </div>
            </div>
          </div>

          <!-- Column 2: Navigation (3 cols) -->
          <div class="lg:col-span-3">
            <h4 class="font-display font-bold text-sm tracking-wider uppercase text-[#F7C51E] mb-4">
              Categorias & Materiais
            </h4>
            <ul class="space-y-2.5 text-xs text-slate-300">
              <li>
                <a routerLink="/" class="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a routerLink="/enem-2026" class="hover:text-white transition-colors flex items-center gap-1 text-[#F7C51E] font-bold">
                  <span>ENEM 2026 (Combo & Simulado)</span>
                  <span class="text-[9px] bg-[#F7C51E] text-slate-900 px-1 py-0.2 rounded font-extrabold">Oficial</span>
                </a>
              </li>
              <li>
                <a routerLink="/produto/enem-2026-mapas-e-simulado" class="hover:text-white transition-colors">
                  150 Mapas ENEM + Simulado
                </a>
              </li>
              <li>
                <a routerLink="/produto/simulado-enem-2026" class="hover:text-white transition-colors">
                  Simulado ENEM 2026 (40 Questões)
                </a>
              </li>
              <li>
                <a routerLink="/" fragment="enem-brinde-gratis" class="hover:text-white transition-colors flex items-center gap-1 text-emerald-300 font-semibold">
                  <span>5 Mapas ENEM (Brinde Grátis)</span>
                  <span class="text-[9px] bg-emerald-500 text-slate-950 px-1 py-0.2 rounded font-extrabold">PDF</span>
                </a>
              </li>
              <li>
                <a routerLink="/biblicos" class="hover:text-white transition-colors">
                  Bíblia em Mapas Mentais
                </a>
              </li>
              <li>
                <a routerLink="/estudos" class="hover:text-white transition-colors">
                  Estudos & Concursos
                </a>
              </li>
              <li>
                <a routerLink="/ingles" class="hover:text-white transition-colors">
                  Inglês em Mapas Mentais
                </a>
              </li>
              <li>
                <a routerLink="/programacao" class="hover:text-white transition-colors">
                  Programação em Mapas Mentais
                </a>
              </li>
              <li>
                <a routerLink="/mapas-mentais" class="hover:text-white transition-colors">
                  Ver Todos os Mapas Mentais
                </a>
              </li>
            </ul>
          </div>

          <!-- Column 3: Atendimento (3 cols) -->
          <div class="lg:col-span-3">
            <h4 class="font-display font-bold text-sm tracking-wider uppercase text-[#F7C51E] mb-4">
              Atendimento & Suporte
            </h4>
            <ul class="space-y-2.5 text-xs text-slate-300">
              <li>
                <a
                  [href]="whatsappUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 px-3 py-2 bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 rounded-xl font-extrabold text-xs transition-all shadow-sm my-1"
                >
                  <mat-icon class="!text-base !w-4 !h-4">chat</mat-icon>
                  <span>WhatsApp: {{ whatsappPhone }}</span>
                </a>
              </li>
              <li>
                <a routerLink="/" fragment="faq" class="hover:text-white transition-colors">Dúvidas frequentes</a>
              </li>
              <li>
                <a href="mailto:contato@mappia.com.br" class="hover:text-white transition-colors flex items-center gap-1.5">
                  <mat-icon class="!text-sm !w-4 !h-4 text-[#F7C51E]">mail</mat-icon>
                  <span>contato&#64;mappia.com.br</span>
                </a>
              </li>
              <li>
                <span class="text-slate-400">Atendimento: Seg à Sex, 09h às 18h</span>
              </li>
              <li>
                <a routerLink="/" class="hover:text-white transition-colors text-slate-400">Política de privacidade</a>
              </li>
              <li>
                <a routerLink="/" class="hover:text-white transition-colors text-slate-400">Termos de uso</a>
              </li>
            </ul>
          </div>

          <!-- Column 4: Redes Sociais (2 cols) -->
          <div class="lg:col-span-2">
            <h4 class="font-display font-bold text-sm tracking-wider uppercase text-[#F7C51E] mb-4">
              Redes Sociais
            </h4>
            <div class="flex flex-col space-y-2 text-xs text-slate-300">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="hover:text-[#F7C51E] transition-colors flex items-center gap-2">
                <span>Instagram</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="hover:text-[#F7C51E] transition-colors flex items-center gap-2">
                <span>YouTube</span>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" class="hover:text-[#F7C51E] transition-colors flex items-center gap-2">
                <span>TikTok</span>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" class="hover:text-[#F7C51E] transition-colors flex items-center gap-2">
                <span>Pinterest</span>
              </a>
            </div>

            <!-- Accepted payment methods icons -->
            <div class="mt-6 pt-4 border-t border-white/10">
              <span class="text-[11px] font-bold text-slate-400 block mb-2">Formas de Pagamento</span>
              <div class="flex items-center gap-2 text-slate-300 text-[11px]">
                <span class="bg-white/10 px-2 py-1 rounded font-bold text-[#F7C51E]">PIX</span>
                <span class="bg-white/10 px-2 py-1 rounded">Cartão</span>
                <span class="bg-white/10 px-2 py-1 rounded">Boleto</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Copyright -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © 2026 Mappia. Todos os direitos reservados.
          </div>
          <div class="font-display font-bold text-[#F7C51E] tracking-wide">
            Estudar hoje. Conquistar sempre.
          </div>
        </div>
      </div>
    </footer>
  `
})
export class Footer {
  readonly whatsappUrl = WHATSAPP_URL;
  readonly whatsappPhone = WHATSAPP_PHONE_FORMATTED;
}
