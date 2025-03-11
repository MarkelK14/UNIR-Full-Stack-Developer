import { Component, inject } from '@angular/core';
import { IServicio } from '../../interfaces/iservicio.interface';
import { TrabajosService } from '../../services/trabajos.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-trabajos',
  imports: [RouterLink],
  templateUrl: './trabajos.component.html',
  styleUrl: './trabajos.component.css'
})
export class TrabajosComponent {
  arrServicios: IServicio[] = [];
  trabajosServices = inject(TrabajosService);

  ngOnInit() {
    //llamar al servicio y llenar nuestro array de servicios
    this.arrServicios = this.trabajosServices.getAll();
  }

}
