import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-newsletter',
  imports: [MatIconModule],
  template: `
    <section class="py-14 bg-gradient-to-r from-[#082B5C] via-[#0D4F91] to-[#082B5C] text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#F7C51E] text-xs font-bold uppercase tracking-wider mb-4 border border-white/15">
          <mat-icon class="!text-sm !w-4 !h-4">mail_outline</mat-icon>
          <span>Exclusivo Mappia</span>
        </div>

        <h2 class="font-display font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight mb-3">
          RECEBA NOVIDADES E LANÇAMENTOS
        </h2>

        <p class="text-sm text-slate-200 max-w-lg mx-auto mb-8 font-normal">
          Cadastre seu e-mail para receber novos materiais, lançamentos e ofertas da Mappia em primeira mão.
        </p>

        @if (isSubmitted()) {
          <div class="p-4 bg-white/15 rounded-2xl border border-emerald-400 text-white max-w-md mx-auto flex items-center justify-center gap-2 text-sm font-semibold">
            <mat-icon class="text-emerald-400">check_circle</mat-icon>
            <span>Inscrição realizada com sucesso! Verifique seu e-mail.</span>
          </div>
        } @else {
          <form (submit)="onSubmit($event)" class="max-w-md mx-auto flex flex-col sm:flex-row gap-2.5">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              required
              [value]="email()"
              (input)="onEmailChange($event)"
              class="flex-1 px-4 py-3.5 bg-white text-slate-800 placeholder-slate-400 rounded-xl text-sm border-0 focus:ring-2 focus:ring-[#F7C51E] outline-hidden shadow-md"
            />
            <button
              type="submit"
              class="px-6 py-3.5 bg-[#F7C51E] hover:bg-amber-400 text-[#082B5C] font-display font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer whitespace-nowrap"
            >
              QUERO RECEBER
            </button>
          </form>
        }

        <p class="text-[11px] text-slate-300 mt-4">
          Respeitamos sua privacidade. Cancele o recebimento quando quiser.
        </p>
      </div>
    </section>
  `
})
export class Newsletter {
  readonly email = signal<string>('');
  readonly isSubmitted = signal<boolean>(false);

  onEmailChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.email.set(input.value);
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.email().trim()) {
      this.isSubmitted.set(true);
    }
  }
}
