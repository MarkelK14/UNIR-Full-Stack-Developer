import { Component, inject } from '@angular/core';
import { AlumnosService } from '../../services/alumnos.service';
import { IAlumno } from '../../interfaces/ialumno.interface';
import { AlumnoCardComponent } from '../alumno-card/alumno-card.component';

@Component({
  selector: 'app-alumnos-list',
  imports: [AlumnoCardComponent],
  templateUrl: './alumnos-list.component.html',
  styleUrl: './alumnos-list.component.css'
})
export class AlumnosListComponent {
  //pedir le informacion de los alumnos al servicio, el servicio es un inyeccion de depencia.
  // dos formas de inyectar, moderna y la antigua.
  //moderna inject()
  alumnosService = inject(AlumnosService)
  alumnos: IAlumno[] = []
  //antigua
  //constructor(private alumnosService: AlumnosService){}

  ngOnInit() {
    this.alumnos = this.alumnosService.getAll()
    console.log(this.alumnos)
  }

}
