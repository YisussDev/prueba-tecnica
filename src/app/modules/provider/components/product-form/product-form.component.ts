import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/core/interfaces/products/product.model';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  products: Product[] = [];
  provideProductForm!: FormGroup;

  constructor(private productServices: ProductsService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.productServices.getProducts().subscribe(data => this.products = data)
    this.provideProductForm= this.fb.group({
      typeProduct: ['1', [Validators.required]],
      quantity: ['1', [Validators.min(1), Validators.required, Validators.max(100)]]
    })
  }

  sendForm(){
    const {typeProduct, quantity} = this.provideProductForm.value;
    this.products.forEach((element:Product) => {
      if(typeProduct == element.id){
        element.stock = element.stock + Number(quantity);
      }
    });
    this.productServices.provideProducts(this.products).subscribe(() => this.provideProductForm.reset());
  }

}
