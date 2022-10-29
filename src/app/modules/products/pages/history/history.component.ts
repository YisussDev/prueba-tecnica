import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { historyProduct } from 'src/app/core/interfaces/products/historyProduct.model';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history: historyProduct[] = [];

  constructor(private productServices: ProductsService) { }

  ngOnInit(): void {
    this.productServices.getHistoryProducts().subscribe(data => this.history = data)
  }


}
