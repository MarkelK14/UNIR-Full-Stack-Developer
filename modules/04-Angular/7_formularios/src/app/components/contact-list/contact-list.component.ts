import { Component, inject } from '@angular/core';
import { IContacto } from '../../interfaces/icontacto.interface';
import { ContactosService } from '../../services/contactos.service';

@Component({
  selector: 'app-contact-list',
  imports: [],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
  arrayContactos: IContacto[] = [];
  contactosServices = inject(ContactosService);

  ngOnInit() {
    this.arrayContactos = this.contactosServices.getAll();
    console.log(this.arrayContactos)

    const { nombre, telefono } = this.arrayContactos[0]; //{nombre: Juan, telefono: 567890, email: efij}
    console.log(nombre, telefono)
  }

}
