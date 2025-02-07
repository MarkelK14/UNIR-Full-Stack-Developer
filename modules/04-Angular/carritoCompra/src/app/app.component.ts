import { Component } from '@angular/core';
import { FormPedidoComponent } from './components/form-pedido/form-pedido.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { TotalesComponent } from './components/totales/totales.component';
import { IProduct } from './interfaces/iproduct.interface';

@Component({
  selector: 'app-root',
  imports: [FormPedidoComponent, ListaProductosComponent, TotalesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  arrProductos: IProduct[] = [
    { title: 'Pañales', price: 8, quantity: 3 },
    { title: 'Potitos', price: 2, quantity: 7 },
    { title: 'Chupete', price: 15, quantity: 2 },
  ]


  ngDoCheck(){
    console.log(this.arrProductos);
  }


  getCalc(event: IProduct) {
    this.arrProductos = [...this.arrProductos, event];
  }
}
