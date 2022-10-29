import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interfaces/products/product.model';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
