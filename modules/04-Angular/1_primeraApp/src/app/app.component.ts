import { Component } from '@angular/core';
import { ContadorComponent } from "./components/contador/contador.component";
import { GaleriaComponent } from './components/galeria/galeria.component';
import { CiclovidaComponent } from "./components/ciclovida/ciclovida.component";



@Component({
  selector: 'app-root',
  imports: [ContadorComponent, GaleriaComponent, CiclovidaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nombre: string = "Juan Antonio"
  edad: number = 12;
  estiloCaja: string = "";
  ciudadSeleccionada: string = "Ninguna"
  cities: any = {
    m: "Madrid",
    p: "Paris",
    l: "Londres"
  }

  ngOnInit() {
    setTimeout(() => {
      this.edad = 43
    }, 7000)
  }

  sumar(n1: number, n2: number): string {
    let resultado = n1 + n2;
    return `El resultado de la suma es ${resultado}`;
  }

  cambiarColor(color: string): void {
    //this.estiloCaja = `background-color: ${color}`
    this.estiloCaja = color;

  }

  selectCity(event: any): void {
    this.ciudadSeleccionada = this.cities[event.target.value];
  }
}
