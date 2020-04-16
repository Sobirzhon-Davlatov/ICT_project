import { Component, OnInit } from '@angular/core';

import { products } from '../products';
import { ProductService} from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products=products;

  constructor(private productService: ProductService) {}


  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  share(product) {
     const url: string = window.location.href + '/' + product.id;
      window.alert(`The product ${ product.name } has been shared!`);
      window.open(`https://web.telegram.org/#/im?p=@olxforkbtubot`);
    }
}
//'${ product.name }+here+${ product.link }

