import { Component, inject, Input } from '@angular/core';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { UsuariosService } from '../../services/usuarios.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-buttons',
  imports: [RouterLink],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {
  @Input() selectedUser!: IUsuario | any;
  usuariosServide = inject(UsuariosService);
  router = inject(Router);
  @Input() volver: Boolean = false;

  ngonInit() {
    setTimeout(() => {
      console.log('vuelve?')
      console.log(this.volver)
      console.log('vuelve? finalizado')
    }, 3000);
  }
}
