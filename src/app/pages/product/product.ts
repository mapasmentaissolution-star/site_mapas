import { ChangeDetectionStrategy, Component, inject, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { DecimalPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CatalogData } from '../../services/catalog-data';
import { ProductCard } from '../../components/product-card/product-card';
import { WHATSAPP_URL, WHATSAPP_PHONE_FORMATTED } from '../../data/products.data';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-product',
  imports: [RouterLink, MatIconModule, DecimalPipe, ProductCard],
  template: `
    <main class="py-10 bg-[#F6F8FA] min-h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        @if (product(); as prod) {
          <!-- Breadcrumb -->
          <nav class="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <a routerLink="/" class="hover:text-[#082B5C] transition-colors">Início</a>
            <span>/</span>
            <a [routerLink]="['/' + prod.categories[0]]" class="hover:text-[#082B5C] transition-colors capitalize">
              {{ prod.categories[0].replace('-', ' ') }}
            </a>
            <span>/</span>
            <span class="text-slate-800 font-semibold truncate max-w-xs">{{ prod.title }}</span>
          </nav>

          <!-- Top Section: 2 Columns (Left Gallery, Right Purchase Box) -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs mb-12">
            <!-- Left: Mockup Gallery (6 cols) -->
            <div class="lg:col-span-6 flex flex-col gap-4">
              <div class="relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 aspect-4/3 shadow-xs">
                <img
                  [src]="prod.image"
                  [alt]="prod.title"
                  referrerpolicy="no-referrer"
                  class="w-full h-full object-cover object-center"
                />

                <!-- Watermark Marca D'água "EM BREVE" -->
                @if (prod.isComingSoon) {
                  <div class="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px] flex flex-col items-center justify-center p-4 z-10 pointer-events-none select-none">
                    <div class="border-2 border-dashed border-amber-300/90 bg-slate-950/80 px-6 py-3 rounded-2xl text-center transform -rotate-6 shadow-2xl backdrop-blur-xs">
                      <span class="block font-display font-black text-amber-300 text-lg sm:text-xl tracking-widest uppercase">
                        EM BREVE
                      </span>
                      <span class="block text-xs text-slate-200 font-medium tracking-wide">
                        Material em desenvolvimento
                      </span>
                    </div>
                  </div>
                }

                @if (prod.badge) {
                  <div class="absolute top-4 left-4 z-20">
                    <span
                      class="px-3 py-1 rounded-md text-xs font-bold tracking-wide uppercase shadow-xs flex items-center gap-1"
                      [class]="prod.isComingSoon
                        ? 'bg-amber-400 text-slate-950'
                        : (prod.badge === 'ECONOMIZE NO COMBO' || prod.badge === 'MAIS VENDIDO'
                          ? 'bg-[#F7C51E] text-slate-900'
                          : 'bg-[#082B5C] text-white')"
                    >
                      @if (prod.isComingSoon) {
                        <mat-icon class="!text-xs !w-3.5 !h-3.5 text-slate-950">schedule</mat-icon>
                      }
                      <span>{{ prod.badge }}</span>
                    </span>
                  </div>
                }

                <div class="absolute bottom-4 right-4 z-20 bg-white/95 backdrop-blur-xs text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-lg border border-slate-200 shadow-xs flex items-center gap-1.5">
                  <mat-icon class="!text-sm !w-4 !h-4 text-[#0D4F91]">picture_as_pdf</mat-icon>
                  <span>{{ prod.format }}</span>
                </div>
              </div>

              <!-- Format & Quality Badge Bar -->
              <div class="grid grid-cols-3 gap-3 text-center text-xs text-slate-600">
                <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/60">
                  <div class="font-bold text-slate-900">{{ prod.mapsCount ? prod.mapsCount + ' Mapas' : 'Guia Completo' }}</div>
                  <div class="text-[11px] text-slate-500">Diagramados em A4</div>
                </div>
                <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/60">
                  <div class="font-bold text-slate-900">300 DPI Vetorial</div>
                  <div class="text-[11px] text-slate-500">Pronto para imprimir</div>
                </div>
                <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/60">
                  <div class="font-bold text-slate-900">Imediato</div>
                  <div class="text-[11px] text-slate-500">Via download e e-mail</div>
                </div>
              </div>
            </div>

            <!-- Right: Product Purchase Module (6 cols) -->
            <div class="lg:col-span-6 flex flex-col justify-between">
              <div>
                <!-- Rating and Reviews -->
                <div class="flex items-center gap-2 mb-3">
                  <div class="flex items-center text-amber-500">
                    @for (s of [1,2,3,4,5]; track s) {
                      <mat-icon class="!text-base !w-4 !h-4">star</mat-icon>
                    }
                  </div>
                  <span class="text-xs font-bold text-slate-800">{{ prod.rating }}</span>
                  <span class="text-xs text-slate-400">({{ prod.reviewsCount }} avaliações de estudantes)</span>
                </div>

                <!-- Product Name -->
                <h1 class="font-display font-black text-2xl sm:text-3xl text-[#082B5C] tracking-tight leading-snug mb-3">
                  {{ prod.title }}
                </h1>

                <!-- Short Description -->
                <p class="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {{ prod.shortDescription }}
                </p>

                <!-- Format Pill -->
                <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#EAF3FC] text-[#0D4F91] rounded-lg text-xs font-bold mb-6">
                  <mat-icon class="!text-sm !w-4 !h-4">download</mat-icon>
                  <span>Produto digital — Arquivo em PDF com acesso vitalício</span>
                </div>

                <!-- Price Area -->
                <div class="p-5 rounded-2xl bg-[#F6F8FA] border border-slate-200 mb-6">
                  @if (prod.originalPrice) {
                    <div class="text-xs text-slate-400 line-through">
                      De R$ {{ prod.originalPrice | number:'1.2-2' }} por apenas
                    </div>
                  }
                  <div class="flex items-baseline gap-1 mt-1">
                    <span class="text-sm font-bold text-slate-700">R$</span>
                    <span class="text-3xl sm:text-4xl font-black text-[#082B5C] font-mono tracking-tight">
                      {{ prod.price | number:'1.2-2' }}
                    </span>
                    <span class="text-xs text-slate-500 ml-2">à vista no Pix ou cartão</span>
                  </div>
                  <div class="text-[11px] text-emerald-700 font-medium mt-1">
                    ou em até 4x no cartão de crédito
                  </div>
                </div>

                <!-- Button: Direct Kiwify Buy Now or EM BREVE -->
                <div class="mb-6">
                  @if (prod.isComingSoon) {
                    <div class="w-full py-4 px-6 bg-slate-100 border border-slate-300 text-slate-700 font-display font-bold text-sm sm:text-base rounded-xl flex items-center justify-center gap-2 text-center shadow-xs">
                      <mat-icon class="!text-xl text-amber-600">hourglass_top</mat-icon>
                      <span class="uppercase tracking-wider font-extrabold text-[#082B5C]">PRODUTO EM PRODUÇÃO • EM BREVE</span>
                    </div>
                    <div class="text-center mt-3 text-xs text-amber-900 bg-amber-50 border border-amber-200/80 rounded-xl p-3 flex items-center justify-center gap-2">
                      <mat-icon class="!text-sm text-amber-600">info</mat-icon>
                      <span>Ainda não temos mapas mentais nessa área. Estamos finalizando este material para lançamento em breve!</span>
                    </div>
                  } @else {
                    <a
                      [href]="prod.kiwifyCheckoutUrl"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="w-full py-4 px-6 bg-[#082B5C] hover:bg-[#0D4F91] text-white font-display font-black text-sm sm:text-base rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>COMPRAR AGORA</span>
                      <mat-icon class="!text-xl text-[#F7C51E]">flash_on</mat-icon>
                    </a>
                    <div class="text-center mt-2 flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
                      <mat-icon class="!text-sm text-emerald-600">verified</mat-icon>
                      <span>Checkout Seguro · Pix Imediato · Cartão em até 6x</span>
                    </div>
                  }
                </div>

                <!-- Guarantee & Safety ticks -->
                <div class="grid grid-cols-2 gap-2.5 text-xs text-slate-600 pt-4 border-t border-slate-100">
                  <div class="flex items-center gap-1.5">
                    <mat-icon class="!text-base !w-4 !h-4 text-emerald-600">check_circle</mat-icon>
                    <span>Acesso digital imediato</span>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <mat-icon class="!text-base !w-4 !h-4 text-emerald-600">check_circle</mat-icon>
                    <span>PDF de alta qualidade</span>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <mat-icon class="!text-base !w-4 !h-4 text-emerald-600">check_circle</mat-icon>
                    <span>Material pronto para imprimir</span>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <mat-icon class="!text-base !w-4 !h-4 text-emerald-600">check_circle</mat-icon>
                    <span>Compra 100% segura</span>
                  </div>
                </div>

                <!-- WhatsApp Support Callout Button -->
                <div class="mt-5 pt-4 border-t border-slate-100">
                  <a
                    [href]="whatsappUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-full py-3 px-4 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-300 text-emerald-950 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    [title]="'Fale conosco no WhatsApp ' + whatsappPhone"
                  >
                    <mat-icon class="!text-lg text-emerald-600">chat</mat-icon>
                    <span>Dúvidas sobre o material? Fale no WhatsApp ({{ whatsappPhone }})</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom Section: Detailed Specs, What You Get, Who It Is For, How It Works -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <!-- Left Info Area (8 cols) -->
            <div class="lg:col-span-8 space-y-10">
              <!-- Detalhes do Material -->
              <section class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
                <h2 class="font-display font-black text-xl text-[#082B5C] mb-4 flex items-center gap-2">
                  <mat-icon class="text-[#0D4F91]">description</mat-icon>
                  <span>DETALHES DO MATERIAL</span>
                </h2>
                <div class="prose text-sm text-slate-700 leading-relaxed space-y-3">
                  <p>{{ prod.fullDescription }}</p>

                  @if (prod.subjects && prod.subjects.length > 0) {
                    <div class="mt-4 pt-4 border-t border-slate-100">
                      <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 mb-2">
                        Tópicos e Disciplinas Contempladas:
                      </h3>
                      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        @for (sub of prod.subjects; track sub) {
                          <li class="flex items-center gap-2 text-slate-600">
                            <span class="w-1.5 h-1.5 rounded-full bg-[#0D4F91]"></span>
                            <span>{{ sub }}</span>
                          </li>
                        }
                      </ul>
                    </div>
                  }
                </div>
              </section>

              <!-- Você Vai Receber -->
              <section class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
                <h2 class="font-display font-black text-xl text-[#082B5C] mb-4 flex items-center gap-2">
                  <mat-icon class="text-[#0D4F91]">folder_zip</mat-icon>
                  <span>VOCÊ VAI RECEBER</span>
                </h2>
                <ul class="space-y-3 text-xs sm:text-sm text-slate-700">
                  @for (item of prod.whatYouGet; track item) {
                    <li class="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                      <mat-icon class="!text-lg text-emerald-600 shrink-0 mt-0.5">check_circle</mat-icon>
                      <span>{{ item }}</span>
                    </li>
                  }
                </ul>
              </section>

              <!-- Para Quem É? -->
              <section class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
                <h2 class="font-display font-black text-xl text-[#082B5C] mb-4 flex items-center gap-2">
                  <mat-icon class="text-[#0D4F91]">group</mat-icon>
                  <span>PARA QUEM É?</span>
                </h2>
                <ul class="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  @for (aud of prod.targetAudience; track aud) {
                    <li class="flex items-center gap-2">
                      <mat-icon class="!text-base text-[#0D4F91]">arrow_right</mat-icon>
                      <span>{{ aud }}</span>
                    </li>
                  }
                </ul>
              </section>
            </div>

            <!-- Right Sidebar: How It Works & Help (4 cols) -->
            <div class="lg:col-span-4 space-y-6">
              <!-- Como Funciona? -->
              <div class="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs">
                <h3 class="font-display font-black text-lg text-[#082B5C] mb-4 flex items-center gap-2">
                  <mat-icon class="text-[#0D4F91]">help_outline</mat-icon>
                  <span>COMO FUNCIONA?</span>
                </h3>
                <ol class="space-y-4 text-xs text-slate-600">
                  <li class="flex items-start gap-3">
                    <span class="w-6 h-6 rounded-full bg-[#082B5C] text-[#F7C51E] font-bold text-xs flex items-center justify-center shrink-0">1</span>
                    <div>
                      <strong class="font-bold text-slate-900 block">Faça sua compra</strong>
                      Escolha Pix ou cartão em um ambiente 100% criptografado e seguro.
                    </div>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="w-6 h-6 rounded-full bg-[#082B5C] text-[#F7C51E] font-bold text-xs flex items-center justify-center shrink-0">2</span>
                    <div>
                      <strong class="font-bold text-slate-900 block">Receba o acesso</strong>
                      Liberação instantânea no seu e-mail e na tela de confirmação.
                    </div>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="w-6 h-6 rounded-full bg-[#082B5C] text-[#F7C51E] font-bold text-xs flex items-center justify-center shrink-0">3</span>
                    <div>
                      <strong class="font-bold text-slate-900 block">Baixe o material</strong>
                      Arquivos em PDF de alta qualidade para celular, tablet ou computador.
                    </div>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="w-6 h-6 rounded-full bg-[#082B5C] text-[#F7C51E] font-bold text-xs flex items-center justify-center shrink-0">4</span>
                    <div>
                      <strong class="font-bold text-slate-900 block">Comece a estudar</strong>
                      Estude na tela ou imprima em casa quando desejar.
                    </div>
                  </li>
                </ol>
              </div>

              <!-- Satisfaction Guarantee Box -->
              <div class="bg-[#EAF3FC] rounded-3xl p-6 border border-[#0D4F91]/20 text-[#082B5C]">
                <div class="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#0D4F91] mb-3 shadow-xs">
                  <mat-icon class="!text-2xl">verified_user</mat-icon>
                </div>
                <h4 class="font-display font-bold text-base mb-1">Garantia de 7 Dias</h4>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Se você não ficar satisfeito com a qualidade dos mapas mentais, devolvemos 100% do seu dinheiro sem burocracia.
                </p>
              </div>
            </div>
          </div>

          <!-- Section: Você Também Pode Gostar (Related Products) -->
          @if (relatedProducts().length > 0) {
            <section class="pt-8 border-t border-slate-200">
              <div class="flex items-center justify-between mb-8">
                <div>
                  <span class="text-xs font-bold uppercase tracking-wider text-[#0D4F91] block mb-1">
                    Sugestões de Estudo
                  </span>
                  <h2 class="font-display font-extrabold text-2xl text-slate-900">
                    VOCÊ TAMBÉM PODE GOSTAR
                  </h2>
                </div>
                <a routerLink="/mapas-mentais" class="text-xs font-bold text-[#0D4F91] hover:underline">
                  Ver todos →
                </a>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                @for (rel of relatedProducts(); track rel.id) {
                  <app-product-card [product]="rel" />
                }
              </div>
            </section>
          }
        } @else {
          <!-- Product Not Found State -->
          <div class="bg-white rounded-3xl p-16 text-center border border-slate-200 max-w-lg mx-auto my-12">
            <mat-icon class="!text-6xl text-slate-300 mb-4">search_off</mat-icon>
            <h2 class="font-display font-black text-2xl text-slate-900 mb-2">Material não encontrado</h2>
            <p class="text-sm text-slate-500 mb-6">
              O material solicitado pode ter sido renomeado ou não está mais disponível.
            </p>
            <a
              routerLink="/mapas-mentais"
              class="px-6 py-3 bg-[#082B5C] hover:bg-[#0D4F91] text-white font-bold text-xs rounded-xl shadow-xs transition-colors inline-block"
            >
              Explorar Outros Mapas Mentais
            </a>
          </div>
        }
      </div>
    </main>
  `
})
export class ProductPage {
  private readonly route = inject(ActivatedRoute);
  private readonly catalogData = inject(CatalogData);

  readonly routeParams = toSignal(this.route.params);

  readonly product = computed(() => {
    const params = this.routeParams();
    const slug = params?.['slug'];
    if (!slug) return undefined;
    return this.catalogData.getProductBySlug(slug);
  });

  readonly relatedProducts = computed(() => {
    const prod = this.product();
    if (!prod) return [];
    return this.catalogData.getRelatedProducts(prod.id, 4);
  });

  readonly whatsappUrl = WHATSAPP_URL;
  readonly whatsappPhone = WHATSAPP_PHONE_FORMATTED;
}
