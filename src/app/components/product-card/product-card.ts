import { ChangeDetectionStrategy, Component, input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { DecimalPipe } from '@angular/common';
import { Product } from '../../models/product.model';
import { KiwifyCheckout } from '../../services/kiwify-checkout';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-product-card',
  imports: [RouterLink, MatIconModule, DecimalPipe],
  template: `
    <article class="group relative flex flex-col h-full bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <!-- Image / Mockup showcase -->
      <a [routerLink]="['/produto', product().slug]" class="relative block overflow-hidden bg-slate-50 aspect-4/3">
        <img
          [src]="product().image"
          [alt]="product().title"
          referrerpolicy="no-referrer"
          loading="lazy"
          class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        <!-- Subtle Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <!-- Watermark Marca D'água "EM BREVE" -->
        @if (product().isComingSoon) {
          <div class="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px] flex flex-col items-center justify-center p-3 z-10 pointer-events-none select-none">
            <div class="border-2 border-dashed border-amber-300/90 bg-slate-950/80 px-4 py-2 rounded-xl text-center transform -rotate-6 shadow-2xl backdrop-blur-xs">
              <span class="block font-display font-black text-amber-300 text-sm sm:text-base tracking-widest uppercase">
                EM BREVE
              </span>
              <span class="block text-[10px] text-slate-200 font-medium tracking-wide">
                Em desenvolvimento
              </span>
            </div>
          </div>
        }

        <!-- Top Badge -->
        @if (product().badge) {
          <div class="absolute top-3 left-3 z-20">
            <span
              class="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold tracking-wide rounded-md shadow-xs"
              [class]="product().price === 0
                ? 'bg-emerald-600 text-white font-extrabold ring-2 ring-white/60'
                : (product().isComingSoon
                  ? 'bg-amber-400 text-slate-950'
                  : (product().badge === 'ECONOMIZE NO COMBO' || product().badge === 'MAIS VENDIDO'
                    ? 'bg-[#F7C51E] text-slate-900'
                    : 'bg-[#082B5C] text-white'))"
            >
              @if (product().price === 0) {
                <mat-icon class="!text-xs !w-3.5 !h-3.5 text-[#F7C51E]">redeem</mat-icon>
              } @else if (product().isComingSoon) {
                <mat-icon class="!text-xs !w-3.5 !h-3.5 text-slate-950">schedule</mat-icon>
              }
              <span>{{ product().badge }}</span>
            </span>
          </div>
        }

        <!-- Format indicator -->
        <div class="absolute top-3 right-3 z-20 bg-white/90 backdrop-blur-xs text-slate-700 text-[11px] font-medium px-2 py-0.5 rounded-md border border-slate-200/60 shadow-xs">
          {{ product().format }}
        </div>
      </a>

      <!-- Card Body -->
      <div class="flex flex-col flex-1 p-5">
        <!-- Rating & Category -->
        <div class="flex items-center justify-between text-xs text-slate-500 mb-2">
          <span class="font-medium text-[#0D4F91] uppercase tracking-wider text-[11px]">
            {{ product().contentLabel || (product().mapsCount ? product().mapsCount + ' mapas mentais' : (product().categories.includes('mapas-mentais') ? 'Mapas mentais' : '40 questões oficiais')) }}
          </span>
          <div class="flex items-center gap-1 text-amber-500">
            <mat-icon class="!text-sm !w-3.5 !h-3.5">star</mat-icon>
            <span class="font-semibold text-slate-700">{{ product().rating }}</span>
            <span class="text-slate-400">({{ product().reviewsCount }})</span>
          </div>
        </div>

        <!-- Title -->
        <h3 class="font-display font-bold text-slate-900 text-base leading-snug group-hover:text-[#0D4F91] transition-colors mb-2 line-clamp-2">
          <a [routerLink]="['/produto', product().slug]">
            {{ product().title }}
          </a>
        </h3>

        <!-- Short Description -->
        <p class="text-xs text-slate-600 line-clamp-2 mb-3 leading-relaxed flex-1">
          {{ product().shortDescription }}
        </p>

        <div class="flex items-center gap-1.5 text-[10px] text-slate-500 mb-3">
          <mat-icon class="!text-xs !w-3.5 !h-3.5 text-[#0D4F91]">smartphone</mat-icon>
          <span>PDF para ler no celular, tablet ou computador</span>
        </div>

        @if (product().isComingSoon) {
          <div class="mb-3 text-[10px] text-amber-800 bg-amber-50 border border-amber-200 rounded-md px-2.5 py-1 font-medium flex items-center gap-1">
            <mat-icon class="!text-xs !w-3.5 !h-3.5 text-amber-600">info</mat-icon>
            <span>Ainda não disponível · Lançamento em breve</span>
          </div>
        }

        <!-- Divider -->
        <div class="h-px bg-slate-100 w-full mb-3"></div>

        <!-- Price & Action -->
        <div class="flex items-end justify-between gap-3 pt-1">
          <div>
            @if (product().price === 0) {
              <div class="flex items-baseline gap-1.5">
                <span class="text-xl font-black text-emerald-600 font-display tracking-tight">
                  GRÁTIS
                </span>
                <span class="text-[10px] font-extrabold uppercase bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">
                  100% OFF
                </span>
              </div>
              <span class="block text-[10px] text-slate-400">Sem custo nenhum</span>
            } @else {
              @if (product().originalPrice) {
                <span class="block text-[11px] text-slate-400 line-through">
                  R$ {{ product().originalPrice | number:'1.2-2' }}
                </span>
              }
              <div class="flex items-baseline gap-1">
                <span class="text-xs font-semibold text-slate-700">R$</span>
                <span class="text-xl font-extrabold text-[#082B5C] font-mono tracking-tight">
                  {{ product().price | number:'1.2-2' }}
                </span>
              </div>
            }
          </div>

          <div class="flex items-center gap-1.5">
            <a
              [routerLink]="['/produto', product().slug]"
              class="inline-flex items-center gap-1 px-2.5 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Detalhes</span>
            </a>

            @if (product().price === 0) {
              <a
                [href]="product().kiwifyCheckoutUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-black text-slate-950 bg-[#25D366] hover:bg-[#1EBE5D] rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
                title="Quero Receber Meu Material Gratuito no WhatsApp"
              >
                <svg class="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.077-2.022-.472-1.688-.7-2.775-2.42-2.859-2.533-.084-.113-.683-.907-.683-1.731 0-.824.432-1.229.586-1.398.154-.17.336-.212.449-.212.112 0 .225.001.323.006.103.005.241-.039.377.29.144.35.488 1.19.531 1.277.043.088.072.19.014.305-.058.115-.088.187-.174.288-.087.101-.183.226-.261.304-.087.087-.178.182-.077.355.101.174.45 1.741 1.543 2.128.324.115.597.184.802.249.325.103.621.089.855.054.261-.039.805-.329.919-.646.114-.317.114-.588.08-.646-.034-.058-.124-.093-.268-.164z"/>
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.05 22l4.982-1.307A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.167c-1.614 0-3.12-.442-4.417-1.211l-.317-.188-2.969.779.792-2.894-.207-.329A8.132 8.132 0 013.833 12c0-4.503 3.664-8.167 8.167-8.167 4.503 0 8.167 3.664 8.167 8.167 0 4.503-3.664 8.167-8.167 8.167z"/>
                </svg>
                <span>RECEBER GRATUITO</span>
              </a>
            } @else if (product().isComingSoon) {
              <span
                class="inline-flex items-center gap-1 px-3 py-2 text-xs font-bold text-slate-500 bg-slate-100 rounded-xl cursor-not-allowed whitespace-nowrap border border-slate-200"
                title="Ainda não temos mapas mentais nessa área. Em breve!"
              >
                <mat-icon class="!text-sm text-amber-500 !w-3.5 !h-3.5">hourglass_top</mat-icon>
                <span>EM BREVE</span>
              </span>
            } @else {
              <a
                [href]="product().kiwifyCheckoutUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1 px-3 py-2 text-xs font-bold text-white bg-[#082B5C] hover:bg-[#0D4F91] rounded-xl transition-all shadow-xs hover:shadow-md cursor-pointer whitespace-nowrap"
              >
                <span>COMPRAR</span>
                <mat-icon class="!text-sm text-[#F7C51E] !w-3.5 !h-3.5">bolt</mat-icon>
              </a>
            }
          </div>
        </div>
      </div>
    </article>
  `
})
export class ProductCard {
  readonly product = input.required<Product>();
  private readonly kiwifyCheckout = inject(KiwifyCheckout);
}
