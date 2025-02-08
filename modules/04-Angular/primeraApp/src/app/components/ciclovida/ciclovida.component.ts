import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ciclovida',
  imports: [],
  templateUrl: './ciclovida.component.html',
  styleUrl: './ciclovida.component.css'
})
export class CiclovidaComponent {
  @Input() miInput: number = 0;

  constructor() {
    //este funcion se ejecuta cuando el ts esta completamente cargado
    console.log('CONSTRUCTOR', this.miInput)
  }

  ngOnInit(): void {
    //esta funcion se ejecuta una sola vez, cuando todo el componente esta cargado selector, html, css y ts
    console.log('OnInit - tengo cargado todas las partes de componente', this.miInput)
  }

  ngOnChanges(): void {
    // siempre que se modifican parametros de entrada al componete @Inputs. Varias veces
    console.log('onChanges', this.miInput)
  }

  ngDoCheck(): void {
    // varias veces, siempre que usuario interactue con el interfaz
    console.log('he tocado la interfaz')
  }

  ngAfterViewInit() {
    //despues de la carga de la vista, pero solo ocurre una vez
    console.log('afterviewinit')
  }


  ngAfterViewChecked() {
    //cada vez que se renderiza la vista nuevamente
    console.log('afterviewchecked')
  }

  ngOnDestroy() {
    //se ejecuta una vez antes de retirar el componente
  }

  selectText() {

  }

}
