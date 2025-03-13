import { Component, Input } from '@angular/core';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { RouterLink } from '@angular/router';
import { ButtonsComponent } from '../../shared/buttons/buttons.component';

@Component({
  selector: 'app-usuario-card',
  imports: [RouterLink, ButtonsComponent],
  templateUrl: './usuario-card.component.html',
  styleUrl: './usuario-card.component.css'
})
export class UsuarioCardComponent {
  @Input() selectedUser!: IUsuario;
}