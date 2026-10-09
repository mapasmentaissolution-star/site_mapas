import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { WHATSAPP_URL, WHATSAPP_PHONE_FORMATTED } from '../../data/products.data';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-whatsapp-button',
  imports: [MatIconModule],
  template: `
    <!-- Floating WhatsApp Widget -->
    <div class="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <!-- Tooltip Bubble (Disappear on close or hover) -->
      @if (showTooltip()) {
        <div class="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-slate-200/90 animate-bounce duration-1000">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span class="font-bold text-slate-900">Dúvidas?</span>
          <span class="text-slate-600">Fale no WhatsApp</span>
          <button
            type="button"
            (click)="dismissTooltip($event)"
            class="text-slate-400 hover:text-slate-600 ml-1 p-0.5 cursor-pointer"
            title="Fechar aviso"
          >
            <mat-icon class="!text-xs !w-3 !h-3">close</mat-icon>
          </button>
        </div>
      }

      <!-- Main WhatsApp Floating Circle Button -->
      <a
        [href]="whatsappUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer focus:outline-hidden focus:ring-4 focus:ring-emerald-400/40"
        [attr.aria-label]="'Fale conosco no WhatsApp ' + phoneFormatted"
      >
        <!-- Pulse effect rings -->
        <span class="absolute inset-0 rounded-full bg-[#25D366] opacity-70 animate-ping pointer-events-none"></span>

        <!-- WhatsApp Icon SVG -->
        <svg
          class="w-8 h-8 fill-current relative z-10 drop-shadow-xs"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.077-2.022-.472-1.688-.7-2.775-2.42-2.859-2.533-.084-.113-.683-.907-.683-1.731 0-.824.432-1.229.586-1.398.154-.17.336-.212.449-.212.112 0 .225.001.323.006.103.005.241-.039.377.29.144.35.488 1.19.531 1.277.043.088.072.19.014.305-.058.115-.088.187-.174.288-.087.101-.183.226-.261.304-.087.087-.178.182-.077.355.101.174.45 1.741 1.543 2.128.324.115.597.184.802.249.325.103.621.089.855.054.261-.039.805-.329.919-.646.114-.317.114-.588.08-.646-.034-.058-.124-.093-.268-.164z"/>
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.05 22l4.982-1.307A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.167c-1.614 0-3.12-.442-4.417-1.211l-.317-.188-2.969.779.792-2.894-.207-.329A8.132 8.132 0 013.833 12c0-4.503 3.664-8.167 8.167-8.167 4.503 0 8.167 3.664 8.167 8.167 0 4.503-3.664 8.167-8.167 8.167z"/>
        </svg>

        <!-- Notification Badge dot -->
        <span class="absolute top-1 right-1 w-3.5 h-3.5 bg-[#F7C51E] border-2 border-white rounded-full z-20"></span>
      </a>
    </div>
  `
})
export class WhatsappButton {
  readonly whatsappUrl = WHATSAPP_URL;
  readonly phoneFormatted = WHATSAPP_PHONE_FORMATTED;
  readonly showTooltip = signal<boolean>(true);

  dismissTooltip(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.showTooltip.set(false);
  }
}
