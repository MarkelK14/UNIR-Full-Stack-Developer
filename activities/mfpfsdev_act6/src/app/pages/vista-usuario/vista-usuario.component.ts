import { Component, inject, Input } from '@angular/core';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { UsuariosService } from '../../services/usuarios.service';
import { toast } from 'ngx-sonner';
import { ButtonsComponent } from "../../shared/buttons/buttons.component";

@Component({
  selector: 'app-vista-usuario',
  imports: [ButtonsComponent],
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
      console.log('vista-usuario.idBueno=>response', this.usuario);
      this.usuario = await this.usuariosService.getById(id+'a');
      console.log('vista-usuario.idMalo=>response', this.usuario);


      // toast.info(`Usuario ${this.usuario.username} cargado correctamente`);
    }catch (msg: any){
      console.log('msg', msg);
      toast.error('Se ha producido un error al cargar el usuario');
    }finally{
      // console.log('vista-usuario.finally=>response', this.usuario);
      this.isLoading = false;
    }
  }
}