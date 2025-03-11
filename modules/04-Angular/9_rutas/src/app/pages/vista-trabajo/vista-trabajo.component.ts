import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrabajosService } from '../../services/trabajos.service';
import { IServicio } from '../../interfaces/iservicio.interface';

@Component({
  selector: 'app-vista-trabajo',
  imports: [],
  templateUrl: './vista-trabajo.component.html',
  styleUrl: './vista-trabajo.component.css'
})
export class VistaTrabajoComponent {
  //necesito saber cual es el dato a cargar, y ese dato lo tengo un url del mi navegador.
  //opcion 1. ActivatedRoute => inyectable de libreria de rutas
  //activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  trabajosServices = inject(TrabajosService);
  servicio!: IServicio
  //opcion 2: @Input() para rutas
  @Input() url: string = "";

  ngOnInit() {
    //opcion 1: ActivatedRoute le voy a preguntar al activatedRouted mis parametros dinamicos de ruta.
    /*
    this.activatedRoute.params.subscribe((params: any) => {
      let url = params.url
      //con esta url llamar al servicio y preguntar si en el array de datos BBDD tenemos algo con esa ruta.
      let response = this.trabajosServices.getByUrl(url)
      if (response != undefined) {
        //tengo lo que quiero
        this.servicio = response;
        console.log(this.servicio)
      } else {
        //redirijo a la pagina 404
        this.router.navigate(['/error'])
      }

    })
    */
    //opcion 2: input Id
    let response = this.trabajosServices.getByUrl(this.url);

    if (!response) {
      this.router.navigate(['/error'])
    }

    this.servicio = response!
    console.log(this.servicio)

  }

}
