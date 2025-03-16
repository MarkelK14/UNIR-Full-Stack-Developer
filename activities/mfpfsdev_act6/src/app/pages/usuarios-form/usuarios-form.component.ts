import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { UsuariosService } from '../../services/usuarios.service';
import { toast } from 'ngx-sonner';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-usuarios-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './usuarios-form.component.html',
  styleUrl: './usuarios-form.component.css'
})
export class UsuariosFormComponent {
  @Input() idUsuario: string = ""
  userForm: FormGroup = new FormGroup({}, [])
  selectedUser!: IUsuario;
  usuariosService = inject(UsuariosService);

  async ngOnInit(){

    console.log(this.idUsuario)

    if (this.idUsuario) {
      //llamamos al servicio y cargamos los datos del empleado.
      try {
        this.selectedUser = await this.usuariosService.getById(this.idUsuario);
        // this.title = 'Actualizar'
      } catch (msg: any) {
        toast.error(msg.error.error)
      }
    }

    this.userForm = new FormGroup({
      _id: new FormControl(this.idUsuario || null, []),
      first_name: new FormControl(this.selectedUser?.first_name || "", []),
      last_name: new FormControl(this.selectedUser?.last_name || "", []),
      username: new FormControl(this.selectedUser?.username || "", []),
      email: new FormControl(this.selectedUser?.email || "", []),
      password: new FormControl(this.selectedUser?.password || "", []),
    }, [])
  }

  getDataForm(){
    console.log(this.userForm.value)
  }
}
