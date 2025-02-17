import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { ModalNoticiaComponent } from "../modal-noticia/modal-noticia.component";

@Component({
  selector: 'app-listado-noticias',
  imports: [ModalNoticiaComponent],
  templateUrl: './listado-noticias.component.html',
  styleUrl: './listado-noticias.component.css'
})
export class ListadoNoticiasComponent {
  @Input() noticias: INoticia[] = [];
  modalSwitch: boolean = false;
  selectedNoticia: INoticia = {titulo: '', categoria: '', imagen: '', cuerpo: '', fecha: ''};
  // @Output() sendNoticia: EventEmitter<INoticia> = new EventEmitter();


  // ---------------------- MODAL ----------------------
  openModal(): void{
    console.log('openModal - pre', this.modalSwitch);
    this.modalSwitch = true;
    console.log('openModal - post', this.modalSwitch);

    // console.log('event', event);

    // this.sendNoticia.emit(event);
  }
  closeModal(): void{
    this.modalSwitch = false;
  }

  getCloseAction(event: boolean): void {
    this.modalSwitch = event;
  }

}
