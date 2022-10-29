import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from '../../../../core/interfaces/products/product.model';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { historyProduct } from 'src/app/core/interfaces/products/historyProduct.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // products: Product[] = [
  //   {
  //     id:1,
  //     name: 'Normal',
  //     img: '',
  //     ref: 1234,
  //     price: 10,
  //     stock:10,
  //     weigth:10,
  //     created:'10-20-2022',
  //     updated: '10-20-2022'
  //   },
  //   {
  //     id:2,
  //     name: 'Espresso',
  //     img: '',
  //     ref: 1234,
  //     price: 10,
  //     stock:10,
  //     weigth:10,
  //     created:'10-20-2022',
  //     updated: '10-20-2022'
  //   },
  //   {
  //     id:3,
  //     name: 'Capuccino',
  //     img: '',
  //     ref: 1234,
  //     price: 10,
  //     stock:10,
  //     weigth:10,
  //     created:'10-20-2022',
  //     updated: '10-20-2022'
  //   },
  //   {
  //     id:4,
  //     name: 'Latte',
  //     img: '',
  //     ref: 1234,
  //     price: 10,
  //     stock:10,
  //     weigth:10,
  //     created:'10-20-2022',
  //     updated: '10-20-2022'
  //   },
  //   {
  //     id:5,
  //     name: 'American',
  //     img: '',
  //     ref: 1234,
  //     price: 10,
  //     stock:10,
  //     weigth:10,
  //     created:'10-20-2022',
  //     updated: '10-20-2022'
  //   }
  // ];
  products: Product[] = []
  history: historyProduct[] = [];
  globalQuantity: any;
  constructor(private productService: ProductsService, private router: Router) { }
  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => this.products = data);
    this.productService.getHistoryProducts().subscribe(data => this.history = data);
  }
  goToHistory(path:string){
    this.router.navigateByUrl('/products/'+path);
  }
  sellProduct(product: Product) {
    if (product.stock > 0) {
      this.showForm(product.name, product)
    }
    else {
      alert('No stock');
    }
  }
  showForm(name: string, product: Product) {
    Swal.fire({
      title: `¿Cuantos ${name} quieres comprar?`,
      input: 'number',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Sell',
      showLoaderOnConfirm: true,
      preConfirm:(quantity)=>{
         this.globalQuantity = quantity;
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        this.products.forEach(item => {
          if (item.id === product.id) {
            item.stock = item.stock - this.globalQuantity;
          }
        })
        this.productService.sellProducts(this.products).subscribe(data =>{
          this.history.push({
            date: new Date().toString(),
            quantity: Number(this.globalQuantity),
            product_id: product.id
          })
          this.productService.addRegisterProducts(this.history).subscribe(data => console.log(data))
        });
        Swal.fire({
          title: `Has vendido ${this.globalQuantity} de ${name}`,
          icon: 'success'
        })
      }
    })
  }
}


