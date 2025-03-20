import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipesComponent } from './components/pipes/pipes.component';
import { PruebaFuncionExternaComponent } from "./components/prueba-funcion-externa/prueba-funcion-externa.component";

@Component({
  selector: 'app-root',
  imports: [PipesComponent, PruebaFuncionExternaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipes';
}
