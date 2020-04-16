import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products, Product } from '../products';
import { CartService } from '../cart.service';
import {ProductService} from '../product.service';
import { OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})


export class ProductDetailComponent {
  products = products;
  product;
  constructor(
      private route: ActivatedRoute,
      private productService: ProductService,
      private cartService: CartService,
      private location: Location
    ) { }
    ngOnInit() {
        this.getProduct();

    }
    getProduct() {
      const id = +this.route.snapshot.paramMap.get('id');
      this.productService.getProduct(id).subscribe(product => this.product = product);
    }
    addToCart(product) {
      this.cartService.addToCart(product);
      window.alert('Your product has been added to the cart!');
    }


// share(product:Product):void {
//      window.alert(`The ${product.name} has been shared!`);

//   }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  goBack(): void {
    this.location.back();
  }

  share(product) {
     const url: string = window.location.href + '/' + product.id;
      window.alert(`The product ${ product.name } has been shared!`);
      window.open(`https://web.telegram.org/#/im?p=@olxforkbtubot`);
    }
}


