import { Component, Input } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';

@Component({
  selector: 'app-listado-noticias',
  imports: [],
  templateUrl: './listado-noticias.component.html',
  styleUrl: './listado-noticias.component.css'
})
export class ListadoNoticiasComponent {
  @Input() noticias: INoticia[] = [];
  texto: string = "";
}
