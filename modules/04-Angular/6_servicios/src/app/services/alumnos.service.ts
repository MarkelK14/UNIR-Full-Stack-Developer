import { Injectable } from '@angular/core';
import { IAlumno } from '../interfaces/ialumno.interface';
import { ALUMNOS } from '../db/alumnos.db';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private arrayAlumnos: IAlumno[] = ALUMNOS

  //puedo crear un funcion que me permita leer todo los datos.
  getAll(): IAlumno[] {
    return this.arrayAlumnos;
  }

  getById(id: number): IAlumno | undefined {
    return this.arrayAlumnos.find(alumno => alumno.id === id)
  }


}
