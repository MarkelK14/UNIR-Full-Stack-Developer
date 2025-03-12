import { Component, inject } from '@angular/core';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { UsuariosService } from '../../services/usuarios.service';
import { IResponse } from '../../interfaces/iresponse.interface';
import { toast } from 'ngx-sonner';
import { UsuarioCardComponent } from '../../components/usuario-card/usuario-card.component';

@Component({
  selector: 'app-user-list',
  imports: [UsuarioCardComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  arrUsuarios: IUsuario[] = [];
  usuariosServices = inject(UsuariosService);

  isLoading: boolean = false;

  async ngOnInit() {
    this.cargarPersonajes();
  }

  async cargarPersonajes() {
    this.isLoading = true;
    try {
      let response: IResponse = await this.usuariosServices.getAllPromise();
      this.arrUsuarios = response.results;
      toast.info('Usuarios cargados correctamente');
    } catch (error) {
      console.log(error);
    }
    finally{
      this.isLoading = false;
    }
  }
}