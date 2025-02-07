import { Component, Input } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct.interface';

@Component({
  selector: 'app-lista-productos',
  imports: [],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {

  @Input() listaProductos: IProduct[] = []
  texto: string = ""
  clase: string = "zui-table"

  ngOnChanges() {
    this.pintar(this.listaProductos)
  }

  pintar(list: IProduct[]) {
    this.texto = "<h3>Lista de la compra</h3>";
    this.texto += '<table><thead><tr><td>Producto</td><td>Precio</td><td>Cantidad</td></tr></thead><tbody>';

    list.forEach(prod => {
      this.texto += `<tr><td>${prod.title}</td><td>${prod.price}</td><td>${prod.quantity}</td></tr>`
    });
    this.texto += "</tbody></table>";
  }

}
