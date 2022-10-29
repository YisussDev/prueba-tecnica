import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home', loadChildren: () => import('./modules/Home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'products', loadChildren: () => import('./modules/products/products.module').then((m) => m.ProductsModule)
  },
  {
    path: 'provider', loadChildren: () => import('./modules/provider/provider.module').then((m) => m.ProviderModule)
  },
  {
    path: '**', redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
