import { Component, Input } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct.interface';

@Component({
  selector: 'app-totales',
  imports: [],
  templateUrl: './totales.component.html',
  styleUrl: './totales.component.css'
})
export class TotalesComponent {
  @Input() listaProductos: IProduct[] = []
    texto: string = ""

    ngOnChanges() {
      this.pintar(this.listaProductos)
    }
  
    pintar(list: IProduct[]) {
      this.texto = "<h3>TOTAL</h3>";
      this.texto += `<p>Cantidad: ${this.listaProductos.reduce((acc, value) => {
        return acc + value.quantity
      },0)}</p>`;
      this.texto += `<p>Precio total: ${this.listaProductos.reduce((acc, value) => {
        return acc + value.price * value.quantity
      },0)}</p>`;
    }
}
