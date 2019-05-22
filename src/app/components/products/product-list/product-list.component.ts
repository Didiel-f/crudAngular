import { Component, OnInit } from '@angular/core';

//Service
import { ProductService } from '../../../services/product.service';
import { print } from 'util';
import { ToastrService } from 'ngx-toastr';

//Class Product
import { Product } from "../../../models/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[];

  constructor( 
    private ProductService: ProductService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.ProductService.getProducts()
      .snapshotChanges()
      .subscribe(item => {
        this.productList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.productList.push(x as Product);
        });
      });
  }

  onEdit(product: Product){
    this.ProductService.selectedProduct = Object.assign({},product);
  }
  onDelete($key: string){
    if(confirm('¿Estás seguro que deseas eliminarlo?')) {
      this.ProductService.deleteProduct($key);
      this.toastr.success('Operación realizada correctamente', 'Conductor eliminado');
    }
  }
}
