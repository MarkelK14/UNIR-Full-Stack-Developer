import { Component } from '@angular/core';

@Component({
  selector: 'app-user-lists',
  imports: [],
  templateUrl: './user-lists.component.html',
  styleUrl: './user-lists.component.css'
})
export class UserListsComponent {
  texto: string = 'Probando unitTest en Angular'
  estado: boolean = false

  onClick(): void {
    this.estado = true
  }
}
