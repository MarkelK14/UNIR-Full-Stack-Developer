import { Component, computed, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-computed',
  imports: [],
  templateUrl: './computed.component.html',
  styleUrl: './computed.component.css'
})
export class ComputedComponent {
  cont: WritableSignal<number> = signal(0);
  cantidad: number = 10;
  //se modifica asociado a la modificación de otro signal.
  dobleCont = computed(() => this.cont() * 10)
  oculto: string = 'block'

  constructor() {
    effect(() => {
      /*
      console.log(`El valor de el contador ${this.cont()}`)
      if (this.cont() % 2 !== 0) {
        this.oculto = 'none'
      } else {
        this.oculto = 'block'
      } */
      console.log('tocado' + this.dobleCont());
    })
  }

  increment() {
    this.cont.update(value => value + 1)
  }
}
