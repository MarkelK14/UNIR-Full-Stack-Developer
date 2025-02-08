import { Component } from '@angular/core';
import { IPhoto } from '../../intefaces/iphoto.interface';

@Component({
  selector: 'app-galeria',
  imports: [],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  currentImg: number = 1;
  arrImagenes: IPhoto[] = [
    { id: 1, title: 'oficina minimalista', url: 'images/imagen1.jpg' },
    { id: 2, title: 'ensalada healthy', url: 'images/imagen2.jpg' },
    { id: 3, title: 'fotografa con estilo', url: 'images/imagen3.jpg' },
  ]

  next() {
    if (this.currentImg < this.arrImagenes.length - 1) {
      this.currentImg = this.currentImg + 1 // this.currentImg++
    } else if (this.currentImg === this.arrImagenes.length - 1) {
      this.currentImg = 0;
    }
  }

  prev() {
    if (this.currentImg > 0) {
      this.currentImg--;
    }
  }

}
