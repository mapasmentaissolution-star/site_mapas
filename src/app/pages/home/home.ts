import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { CategoryCards } from '../../components/category-cards/category-cards';
import { BestSellers } from '../../components/best-sellers/best-sellers';
import { ComboBanner } from '../../components/combo-banner/combo-banner';
import { Benefits } from '../../components/benefits/benefits';
import { Method } from '../../components/method/method';
import { MindmapSpotlight } from '../../components/mindmap-spotlight/mindmap-spotlight';
import { EnemSpecial } from '../../components/enem-special/enem-special';
import { Testimonials } from '../../components/testimonials/testimonials';
import { Faq } from '../../components/faq/faq';
import { Newsletter } from '../../components/newsletter/newsletter';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-home',
  imports: [
    Hero,
    CategoryCards,
    BestSellers,
    ComboBanner,
    Benefits,
    Method,
    MindmapSpotlight,
    EnemSpecial,
    Testimonials,
    Faq,
    Newsletter
  ],
  template: `
    <main>
      <!-- Hero Principal -->
      <app-hero />

      <!-- Categorias em Cards Horizontais -->
      <app-category-cards />

      <!-- Seção Mais Vendidos -->
      <app-best-sellers />

      <!-- Grande Oferta ENEM (Combo Promocional) -->
      <app-combo-banner />

      <!-- Benefícios da Mappia -->
      <app-benefits />

      <!-- Como Funciona / Nosso Método -->
      <app-method />

      <!-- Destaque dos Mapas Mentais -->
      <app-mindmap-spotlight />

      <!-- Seção ENEM 2026 Exclusiva -->
      <app-enem-special />

      <!-- Depoimentos de Clientes -->
      <app-testimonials />

      <!-- Dúvidas Frequentes FAQ -->
      <app-faq />

      <!-- Newsletter -->
      <app-newsletter />
    </main>
  `
})
export class Home {}
