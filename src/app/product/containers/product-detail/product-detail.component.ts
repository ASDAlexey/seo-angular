import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product = new Product();

  constructor(private router: ActivatedRoute, private service: ProductService) {}

  ngOnInit() {
    this.product.id = this.router.snapshot.paramMap.get('id');

    this.service.getProduct(this.product.id).subscribe((res) => {
      console.log(res);
      this.product = res;
    });
  }
}
