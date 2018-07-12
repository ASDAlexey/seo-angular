import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product = new Product();

  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    this.product.id = this.router.snapshot.paramMap.get('id');
  }
}
