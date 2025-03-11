import { Injectable } from '@angular/core';
import { IContacto } from '../interfaces/icontacto.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  private arrayContactos: IContacto[] = [{ nombre: 'Raquel', email: 'raquel@gmail.com', telefono: '1234567', tipo: 'laboral' }];

  insert(contact: IContacto): any {
    // deberiamos tener en cuenta si el contacto ya existe
    this.arrayContactos.push(contact)
    console.log(this.arrayContactos)
    return { status: true, msg: 'contacto registrado correctamente' }
  }

  getAll(): IContacto[] {
    return this.arrayContactos
  }
}
