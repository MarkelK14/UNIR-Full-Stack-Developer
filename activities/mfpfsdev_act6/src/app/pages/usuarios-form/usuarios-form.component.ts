import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IUsuario } from '../../interfaces/iusuario.interface';

@Component({
  selector: 'app-usuarios-form',
  imports: [ReactiveFormsModule],
  templateUrl: './usuarios-form.component.html',
  styleUrl: './usuarios-form.component.css'
})
export class UsuariosFormComponent {
  @Input() idUser: string = ""
  userForm: FormGroup = new FormGroup({}, [])
  selectedUser!: IUsuario;

  ngOnInit(){
    this.userForm = new FormGroup({
      _id: new FormControl(this.idUser || null, []),
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
