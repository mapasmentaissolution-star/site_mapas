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
            {{ product().mapsCount ? product().mapsCount + ' mapas mentais' : '40 questões oficiais' }}
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
                class="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-black text-slate-950 bg-[#F7C51E] hover:bg-amber-400 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer whitespace-nowrap animate-pulse"
                title="Baixar 5 Mapas ENEM Grátis no Google Drive"
              >
                <mat-icon class="!text-sm text-[#082B5C] !w-3.5 !h-3.5">download</mat-icon>
                <span>BAIXAR GRÁTIS</span>
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
