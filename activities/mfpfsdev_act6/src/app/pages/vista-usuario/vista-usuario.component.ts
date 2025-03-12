import { Component, inject, Input } from '@angular/core';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-vista-usuario',
  imports: [],
  templateUrl: './vista-usuario.component.html',
  styleUrl: './vista-usuario.component.css'
})
export class VistaUsuarioComponent {
  @Input() idUsuario: string = "";
  usuario! : IUsuario;
  usuariosService = inject(UsuariosService);
  
  isLoading: boolean = false;

  async ngOnInit() {
    let id = this.idUsuario;
    this.isLoading = true;
    try{
      this.usuario = await this.usuariosService.getById(id);
      console.log(this.usuario);
    }catch (error){
      console.log(error);
    }finally{
      this.isLoading = false;
    }
  }
}
