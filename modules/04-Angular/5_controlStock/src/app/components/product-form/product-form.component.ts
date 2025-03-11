import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../interfaces/iproduct.interface';

@Component({
  selector: 'app-product-form',
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  newProduct: IProduct = { title: "", price: 0, quantity: 0 }
  @Output() sendProduct: EventEmitter<IProduct> = new EventEmitter();

  getProduct() {
    //console.log(this.newProduct)
    //enviarselo al padre.
    this.sendProduct.emit(this.newProduct);
    this.newProduct = { title: "", price: 0, quantity: 0 };
  }
}
