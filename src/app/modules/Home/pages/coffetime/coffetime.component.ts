import { Component, OnInit } from '@angular/core';
import { historyProduct } from 'src/app/core/interfaces/products/historyProduct.model';
import { Product } from 'src/app/core/interfaces/products/product.model';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-coffetime',
  templateUrl: './coffetime.component.html',
  styleUrls: ['./coffetime.component.css']
})
export class CoffetimeComponent implements OnInit {
  history: historyProduct[] = [];
  topProduct!: Product;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getHistoryProducts().subscribe(data => {
      this.history = data;
      this.searchTop();
    })
  }

  searchTop() {
    console.log('Search top');
  }
}

