import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CatalogData } from '../../services/catalog-data';
import { KiwifyCheckout } from '../../services/kiwify-checkout';
import { Product } from '../../models/product.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  template: `
    <!-- Top Announcement Bar -->
    <div class="bg-[#082B5C] text-white text-xs py-2 px-4 border-b border-white/10">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#F7C51E] text-[#082B5C] font-bold text-[10px]">
            ⚡
          </span>
          <span class="font-medium tracking-wide">
            Acesso Imediato em PDF pós-compra via Kiwify · 100% Digital e Pronto para Imprimir
          </span>
        </div>
        <div class="hidden md:flex items-center gap-4 text-[11px] text-slate-300">
          <span class="flex items-center gap-1">
            <mat-icon class="!text-sm !w-4 !h-4 text-[#F7C51E]">verified</mat-icon>
            Garantia Incondicional de 7 dias
          </span>
          <span>·</span>
          <span class="flex items-center gap-1">
            <mat-icon class="!text-sm !w-4 !h-4 text-emerald-400">lock</mat-icon>
            Checkout Seguro Kiwify
          </span>
        </div>
      </div>
    </div>

    <!-- Main Sticky Header -->
    <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20 gap-4">
          <!-- Left: Brand Logo -->
          <div class="flex items-center gap-4">
            <a routerLink="/" class="flex items-center gap-3 group py-1">
              <img
                src="/assets/images/mappia_official_logo_1790962795414.jpg"
                alt="MAPPIA — Aprenda. Revise. Memorize."
                referrerpolicy="no-referrer"
                class="h-14 sm:h-16 w-auto object-contain rounded-xl hover:opacity-95 transition-opacity"
              />
              <span class="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#EAF3FC] text-[#0D4F91] border border-[#0D4F91]/20">
                ENEM 2026
              </span>
            </a>
          </div>

          <!-- Center: Search Input Bar -->
          <div class="hidden lg:flex flex-1 max-w-md mx-4 relative">
            <div class="relative w-full">
              <input
                type="text"
                [value]="searchQuery()"
                (input)="onSearchInput($event)"
                (keydown.enter)="executeSearch()"
                placeholder="🔍 O que você procura? (ex: Funções, Simulado, Biomas)"
                class="w-full pl-10 pr-10 py-2.5 bg-slate-100/80 hover:bg-slate-100 focus:bg-white text-sm text-slate-800 rounded-xl border border-slate-200 focus:border-[#0D4F91] focus:ring-2 focus:ring-[#0D4F91]/15 transition-all outline-hidden"
              />
              <button
                type="button"
                (click)="executeSearch()"
                class="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#0D4F91] transition-colors cursor-pointer"
                title="Pesquisar"
              >
                <mat-icon class="!text-lg">search</mat-icon>
              </button>
            </div>

            <!-- Autocomplete Live Suggestions Dropdown -->
            @if (showSuggestions() && suggestions().length > 0) {
              <div class="absolute left-0 right-0 top-full mt-2 bg-white rounded-xl shadow-xl border border-slate-200/90 py-2 z-50 overflow-hidden">
                <div class="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Materiais Disponíveis
                </div>
                @for (item of suggestions(); track item.id) {
                  <a
                    [routerLink]="['/produto', item.slug]"
                    (click)="closeSuggestions()"
                    class="flex items-center gap-3 px-3 py-2 hover:bg-slate-50 transition-colors"
                  >
                    <img [src]="item.image" [alt]="item.title" class="w-10 h-10 object-cover rounded-lg bg-slate-100 shrink-0" />
                    <div class="flex-1 min-w-0">
                      <div class="text-xs font-semibold text-slate-800 truncate">{{ item.title }}</div>
                      <div class="text-[11px] text-slate-500 font-mono">R$ {{ item.price.toFixed(2) }}</div>
                    </div>
                    <span class="text-xs text-[#0D4F91] font-medium shrink-0">Ver →</span>
                  </a>
                }
              </div>
            }
          </div>

          <!-- Right: Actions (User Portal & Direct Kiwify Buy CTA) -->
          <div class="flex items-center gap-2 sm:gap-3">
            <!-- User / Library button -->
            <button
              type="button"
              (click)="openAccountModal()"
              class="flex items-center gap-1.5 p-2 sm:px-3 sm:py-2 text-slate-700 hover:text-[#082B5C] hover:bg-slate-100 rounded-xl transition-colors cursor-pointer text-xs font-semibold"
              title="Acessar meus downloads"
            >
              <mat-icon class="!text-xl text-slate-600">person_outline</mat-icon>
              <span class="hidden md:inline">Já Sou Aluno</span>
            </button>

            <!-- Direct Purchase CTA pointing to Kiwify -->
            <a
              [href]="comboKiwifyUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#082B5C] hover:bg-[#0D4F91] text-white font-display font-bold text-xs rounded-xl shadow-xs hover:shadow-md transition-all cursor-pointer whitespace-nowrap"
            >
              <mat-icon class="!text-base text-[#F7C51E]">flash_on</mat-icon>
              <span>QUERO O COMBO</span>
            </a>

            <!-- Mobile Hamburger Toggle -->
            <button
              type="button"
              (click)="toggleMobileMenu()"
              class="p-2 text-slate-700 hover:text-[#082B5C] hover:bg-slate-100 rounded-xl lg:hidden cursor-pointer"
              title="Menu de navegação"
            >
              <mat-icon class="!text-2xl">{{ isMobileMenuOpen() ? 'close' : 'menu' }}</mat-icon>
            </button>
          </div>
        </div>

        <!-- Desktop Navigation Bar Center Row -->
        <nav class="hidden lg:flex items-center justify-center gap-7 py-3 border-t border-slate-100 text-sm font-medium text-slate-600">
          <a
            routerLink="/"
            routerLinkActive="text-[#082B5C] font-bold border-b-2 border-[#082B5C] pb-1 -mb-1"
            [routerLinkActiveOptions]="{ exact: true }"
            class="hover:text-[#082B5C] transition-colors"
          >
            Início
          </a>

          <a
            routerLink="/mapas-mentais"
            routerLinkActive="text-[#082B5C] font-bold border-b-2 border-[#082B5C] pb-1 -mb-1"
            class="hover:text-[#082B5C] transition-colors"
          >
            Mapas Mentais
          </a>

          <!-- ENEM 2026 - SUPER DESTAQUE -->
          <a
            routerLink="/enem-2026"
            routerLinkActive="bg-[#082B5C] text-[#F7C51E] shadow-sm"
            class="group/enem relative inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF3FC] text-[#082B5C] hover:bg-[#082B5C] hover:text-[#F7C51E] font-bold text-xs border border-[#0D4F91]/25 transition-all shadow-xs"
          >
            <mat-icon class="!text-sm !w-4 !h-4 text-[#F7C51E]">local_fire_department</mat-icon>
            <span class="tracking-wide">ENEM 2026</span>
            <span class="text-[9px] bg-[#F7C51E] text-slate-900 group-hover/enem:bg-white group-hover/enem:text-[#082B5C] px-1.5 py-0.2 rounded font-extrabold uppercase">
              Destaque
            </span>
          </a>

          <a
            routerLink="/biblicos"
            routerLinkActive="text-[#082B5C] font-bold border-b-2 border-[#082B5C] pb-1 -mb-1"
            class="hover:text-[#082B5C] transition-colors"
          >
            Bíblicos
          </a>

          <a
            routerLink="/estudos"
            routerLinkActive="text-[#082B5C] font-bold border-b-2 border-[#082B5C] pb-1 -mb-1"
            class="hover:text-[#082B5C] transition-colors"
          >
            Estudos
          </a>

          <a
            routerLink="/ingles"
            routerLinkActive="text-[#082B5C] font-bold border-b-2 border-[#082B5C] pb-1 -mb-1"
            class="hover:text-[#082B5C] transition-colors"
          >
            Inglês
          </a>

          <a
            routerLink="/programacao"
            routerLinkActive="text-[#082B5C] font-bold border-b-2 border-[#082B5C] pb-1 -mb-1"
            class="hover:text-[#082B5C] transition-colors"
          >
            Programação
          </a>
        </nav>
      </div>

      <!-- Mobile Menu & Search Overlay -->
      @if (isMobileMenuOpen()) {
        <div class="lg:hidden bg-white border-t border-slate-200 px-4 pt-4 pb-6 space-y-4 shadow-xl">
          <!-- Mobile Search Input -->
          <div class="relative">
            <input
              type="text"
              [value]="searchQuery()"
              (input)="onSearchInput($event)"
              (keydown.enter)="executeSearch()"
              placeholder="🔍 O que você procura?"
              class="w-full pl-10 pr-4 py-2.5 bg-slate-100 text-sm text-slate-800 rounded-xl border border-slate-200 focus:bg-white focus:border-[#0D4F91] outline-hidden"
            />
            <mat-icon class="absolute left-3 top-1/2 -translate-y-1/2 !text-lg text-slate-400">search</mat-icon>
          </div>

          <!-- Mobile Nav Links -->
          <div class="flex flex-col space-y-1 text-sm font-semibold text-slate-700 pt-2">
            <a
              routerLink="/"
              (click)="closeMobileMenu()"
              class="px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors flex items-center justify-between"
            >
              <span>Início</span>
              <mat-icon class="!text-sm text-slate-400">chevron_right</mat-icon>
            </a>

            <!-- ENEM 2026 Destacado no Mobile -->
            <a
              routerLink="/enem-2026"
              (click)="closeMobileMenu()"
              class="px-3 py-2.5 rounded-xl bg-[#EAF3FC] text-[#082B5C] border border-[#0D4F91]/20 font-bold flex items-center justify-between"
            >
              <div class="flex items-center gap-2">
                <mat-icon class="!text-base text-[#F7C51E]">local_fire_department</mat-icon>
                <span>ENEM 2026 (Combo & Simulado)</span>
              </div>
              <span class="text-[10px] bg-[#F7C51E] text-slate-900 px-2 py-0.5 rounded font-extrabold uppercase">Destaque</span>
            </a>

            <a
              routerLink="/mapas-mentais"
              (click)="closeMobileMenu()"
              class="px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors flex items-center justify-between"
            >
              <span>Mapas Mentais</span>
              <mat-icon class="!text-sm text-slate-400">chevron_right</mat-icon>
            </a>

            <a
              routerLink="/biblicos"
              (click)="closeMobileMenu()"
              class="px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors flex items-center justify-between"
            >
              <span>Bíblicos</span>
              <mat-icon class="!text-sm text-slate-400">chevron_right</mat-icon>
            </a>

            <a
              routerLink="/estudos"
              (click)="closeMobileMenu()"
              class="px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors flex items-center justify-between"
            >
              <span>Estudos & Concursos</span>
              <mat-icon class="!text-sm text-slate-400">chevron_right</mat-icon>
            </a>

            <a
              routerLink="/ingles"
              (click)="closeMobileMenu()"
              class="px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors flex items-center justify-between"
            >
              <span>Inglês</span>
              <mat-icon class="!text-sm text-slate-400">chevron_right</mat-icon>
            </a>

            <a
              routerLink="/programacao"
              (click)="closeMobileMenu()"
              class="px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors flex items-center justify-between"
            >
              <span>Programação</span>
              <mat-icon class="!text-sm text-slate-400">chevron_right</mat-icon>
            </a>
          </div>

          <div class="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <a
              [href]="comboKiwifyUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full py-3.5 px-4 bg-[#082B5C] hover:bg-[#0D4F91] text-white rounded-xl text-xs font-black flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <mat-icon class="!text-lg text-[#F7C51E]">flash_on</mat-icon>
              <span>GARANTIR COMBO ENEM 2026 NO KIWIFY</span>
            </a>
          </div>
        </div>
      }
    </header>

    <!-- Account / Login Modal Simulation -->
    @if (isAccountModalOpen()) {
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
        <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative border border-slate-200">
          <button
            type="button"
            (click)="closeAccountModal()"
            class="absolute top-4 right-4 text-slate-400 hover:text-slate-700 cursor-pointer"
          >
            <mat-icon>close</mat-icon>
          </button>

          <div class="text-center mb-6">
            <img
              src="/assets/images/mappia_official_logo_1790962795414.jpg"
              alt="MAPPIA — Aprenda. Revise. Memorize."
              referrerpolicy="no-referrer"
              class="h-16 w-auto object-contain mx-auto mb-3 rounded-xl shadow-xs"
            />
            <h3 class="font-display font-bold text-xl text-slate-900">Portal do Aluno Mappia</h3>
            <p class="text-xs text-slate-500 mt-1">
              Acesse seus mapas mentais e simulados comprados pela Kiwify.
            </p>
          </div>

          <form (submit)="handleLoginSimulation($event)" class="space-y-4">
            <div>
              <label for="student-email" class="block text-xs font-semibold text-slate-700 mb-1">E-mail utilizado na compra Kiwify</label>
              <input
                id="student-email"
                type="email"
                placeholder="seuemail@exemplo.com"
                required
                class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-[#0D4F91] outline-hidden"
              />
            </div>

            <div>
              <label for="student-password" class="block text-xs font-semibold text-slate-700 mb-1">Código de Acesso ou Senha</label>
              <input
                id="student-password"
                type="password"
                placeholder="••••••••"
                required
                class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-[#0D4F91] outline-hidden"
              />
            </div>

            <button
              type="submit"
              class="w-full py-3 bg-[#082B5C] hover:bg-[#0D4F91] text-white font-bold text-sm rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Acessar Meus Downloads</span>
              <mat-icon class="!text-lg">arrow_forward</mat-icon>
            </button>
          </form>

          @if (loginSuccessMessage()) {
            <div class="mt-4 p-3 bg-emerald-50 text-emerald-800 rounded-xl text-xs border border-emerald-200 flex items-center gap-2">
              <mat-icon class="!text-base text-emerald-600">check_circle</mat-icon>
              <span>{{ loginSuccessMessage() }}</span>
            </div>
          }

          <div class="mt-4 pt-4 border-t border-slate-100 text-center">
            <span class="text-xs text-slate-400">
              Comprou agora? O acesso é liberado no seu e-mail pela Kiwify em até 1 minuto.
            </span>
          </div>
        </div>
      </div>
    }
  `
})
export class Header {
  private readonly router = inject(Router);
  private readonly catalogData = inject(CatalogData);
  private readonly kiwifyCheckout = inject(KiwifyCheckout);

  readonly isMobileMenuOpen = signal<boolean>(false);
  readonly isAccountModalOpen = signal<boolean>(false);
  readonly loginSuccessMessage = signal<string | null>(null);

  readonly searchQuery = signal<string>('');
  readonly showSuggestions = signal<boolean>(false);
  readonly suggestions = signal<Product[]>([]);

  readonly comboKiwifyUrl = 'https://pay.kiwify.com.br/nsHOTy9';

  onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.searchQuery.set(value);

    if (value.trim().length >= 2) {
      const results = this.catalogData.searchProducts(value).slice(0, 4);
      this.suggestions.set(results);
      this.showSuggestions.set(true);
    } else {
      this.showSuggestions.set(false);
      this.suggestions.set([]);
    }
  }

  executeSearch(): void {
    const q = this.searchQuery().trim();
    this.showSuggestions.set(false);
    this.isMobileMenuOpen.set(false);
    if (q) {
      this.router.navigate(['/busca'], { queryParams: { q } });
    }
  }

  closeSuggestions(): void {
    this.showSuggestions.set(false);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  openAccountModal(): void {
    this.isAccountModalOpen.set(true);
    this.loginSuccessMessage.set(null);
  }

  closeAccountModal(): void {
    this.isAccountModalOpen.set(false);
  }

  handleLoginSimulation(event: Event): void {
    event.preventDefault();
    this.loginSuccessMessage.set('Acesso verificado! Redirecionando para seus materiais em PDF...');
    setTimeout(() => {
      this.closeAccountModal();
      this.router.navigate(['/']);
    }, 1500);
  }
}
