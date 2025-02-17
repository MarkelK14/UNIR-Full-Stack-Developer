import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';

@Component({
  selector: 'app-modal-noticia',
  imports: [],
  templateUrl: './modal-noticia.component.html',
  styleUrl: './modal-noticia.component.css'
})
export class ModalNoticiaComponent {
  // @Input() selectedNoticia: INoticia = {titulo: '', categoria: '', imagen: '', cuerpo: '', fecha: ''};
  @Output() sendCloseAction: EventEmitter<boolean> = new EventEmitter();

  

  getCloseAction(): void {
    this.sendCloseAction.emit(false);
  }
}
