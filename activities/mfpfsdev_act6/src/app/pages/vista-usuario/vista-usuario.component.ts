import { Component, inject, Input } from '@angular/core';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { UsuariosService } from '../../services/usuarios.service';
import { RouterLink } from '@angular/router';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-vista-usuario',
  imports: [RouterLink],
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
      toast.info(`Usuario ${this.usuario.username} cargado correctamente`);
    }catch (msg: any){
      console.log('msg', msg);
    }finally{
      this.isLoading = false;
    }
  }
}
