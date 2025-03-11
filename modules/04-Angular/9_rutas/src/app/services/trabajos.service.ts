import { Injectable } from '@angular/core';
import { IServicio } from '../interfaces/iservicio.interface';
import { SERVICIOS } from '../db/trabajos.db';

@Injectable({
  providedIn: 'root'
})
export class TrabajosService {
  private arrayServicios: IServicio[] = SERVICIOS
  private id: number = 6;

  getAll(): IServicio[] {
    return this.arrayServicios;
  }

  getByUrl(url: string): IServicio | undefined {
    return this.arrayServicios.find(servicio => servicio.url === url)
  }

  insert(servicio: IServicio): any {
    servicio.id = this.id
    this.arrayServicios.push(servicio)
    this.id++;
    return { success: 'Insertado correctamente' }
  }
}
