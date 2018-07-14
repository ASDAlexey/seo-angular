import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { map, tap } from 'rxjs/operators';
import { UiService } from '../../../ui/sevices/ui.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product = new Product();

  constructor(private route: ActivatedRoute, private ui: UiService) {}

  ngOnInit() {
    this.route.data.pipe(
      map(data => data['product']),
      tap(product => this.metaData(product)),
    ).subscribe((res) => (this.product = res));
  }

  metaData(product: Product) {
    this.ui.setMetaData({
      title: `${product.name} for only ${product.price}`,
      description: product.describtion,
      image: product.image,
    });
  }
}
