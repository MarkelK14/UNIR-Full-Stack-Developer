import { Component, EventEmitter, Output } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-noticia',
  imports: [FormsModule],
  templateUrl: './form-noticia.component.html',
  styleUrl: './form-noticia.component.css'
})
export class FormNoticiaComponent {
  newNoticia: INoticia = {titulo: '', categoria: '', imagen: '', cuerpo: '', fecha: ''};
  @Output() sendNoticia = new EventEmitter<INoticia>();

  getNoticia(): void {

    console.log(this.newNoticia);

    if (this.newNoticia.titulo === '' || this.newNoticia.imagen === '' || this.newNoticia.cuerpo === '' || this.newNoticia.fecha === '') {
      alert('Todos los campos son obligatorios');
      return;
    }else{
      this.sendNoticia.emit(this.newNoticia);
      this.newNoticia = {titulo: '', categoria: '', imagen: '', cuerpo: '', fecha: ''};      
    }

  }
}
