import { Component, Input } from '@angular/core';
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


  // ---------------------- MODAL ----------------------
  openModal(): void{
    this.modalSwitch = true;
  }
  closeModal(): void{
    this.modalSwitch = false;
  }

  getCloseAction(event: boolean): void {
    this.modalSwitch = event;
  }

}
