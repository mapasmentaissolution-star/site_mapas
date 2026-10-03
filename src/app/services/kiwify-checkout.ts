import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class KiwifyCheckout {
  openCheckout(product: Product): void {
    if (typeof window !== 'undefined') {
      const url = product.kiwifyCheckoutUrl || 'https://pay.kiwify.com.br/';
      window.location.href = url;
    }
  }

  getCheckoutUrl(product: Product): string {
    return product.kiwifyCheckoutUrl || 'https://pay.kiwify.com.br/';
  }
}
