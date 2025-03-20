import { Component } from '@angular/core';
import { sanitizarArray } from '../../utils/utils.funciones';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-prueba-funcion-externa',
  imports: [JsonPipe],
  templateUrl: './prueba-funcion-externa.component.html',
  styleUrl: './prueba-funcion-externa.component.css'
})
export class PruebaFuncionExternaComponent {
  productos: any[] = [
    { id: 1, name: 'Leche', precio: 34 },
    { id: 2, name: 'carne', precio: 23 },
    { id: 3, name: 'pesCadO', precio: 43 }
  ]
  resultante: any[] = []

  ngOnInit() {
    this.resultante = sanitizarArray(this.productos, 'name');
  }
}
