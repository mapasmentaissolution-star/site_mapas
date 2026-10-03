import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'mapas-mentais',
    loadComponent: () => import('./pages/category/category').then(m => m.CategoryPage)
  },
  {
    path: 'enem-2026',
    loadComponent: () => import('./pages/category/category').then(m => m.CategoryPage)
  },
  {
    path: 'biblicos',
    loadComponent: () => import('./pages/category/category').then(m => m.CategoryPage)
  },
  {
    path: 'estudos',
    loadComponent: () => import('./pages/category/category').then(m => m.CategoryPage)
  },
  {
    path: 'ingles',
    loadComponent: () => import('./pages/category/category').then(m => m.CategoryPage)
  },
  {
    path: 'programacao',
    loadComponent: () => import('./pages/category/category').then(m => m.CategoryPage)
  },
  {
    path: 'simulado',
    loadComponent: () => import('./pages/category/category').then(m => m.CategoryPage)
  },
  {
    path: 'produto/enem-2026-mapas-mentais',
    redirectTo: 'produto/enem-2026-mapas-e-simulado'
  },
  {
    path: 'produto/combo-enem-supremo',
    redirectTo: 'produto/enem-2026-mapas-e-simulado'
  },
  {
    path: 'produto/:slug',
    loadComponent: () => import('./pages/product/product').then(m => m.ProductPage)
  },
  {
    path: 'carrinho',
    redirectTo: 'produto/enem-2026-mapas-e-simulado'
  },
  {
    path: 'checkout',
    redirectTo: 'produto/enem-2026-mapas-e-simulado'
  },
  {
    path: 'busca',
    loadComponent: () => import('./pages/search/search').then(m => m.SearchPage)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
