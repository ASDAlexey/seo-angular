import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { ProductDetailComponent } from './containers/product-detail/product-detail.component';
import { ProductResolver } from './resolvers/product.resolver';
import { ProductsResolver } from './resolvers/products.resolver';

const routes: Routes = [
  { path: '', component: ProductListComponent, resolve: { products: ProductsResolver } },
  { path: ':id', component: ProductDetailComponent, resolve: { product: ProductResolver } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
