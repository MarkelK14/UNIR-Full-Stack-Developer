import { Component, EventEmitter, Output } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-pedido',
  imports: [FormsModule],
  templateUrl: './form-pedido.component.html',
  styleUrl: './form-pedido.component.css'
})
export class FormPedidoComponent {
  newProduct: IProduct = { title: '', price: 0, quantity: 0 }

  @Output() emmittedProduct: EventEmitter<IProduct> = new EventEmitter();

  addProduct(){
    this.emmittedProduct.emit(this.newProduct);
    this.newProduct = { title: '', price: 0, quantity: 0 }
  }
}
