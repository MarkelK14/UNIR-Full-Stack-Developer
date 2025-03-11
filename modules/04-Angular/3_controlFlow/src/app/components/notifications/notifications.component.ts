import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
  roles: string[] = ['admin', 'editor', 'suscriptor', 'invitado']
  role: string = this.roles[2];

  cambiarRole(event: any): void {
    console.log(typeof event.target.value)
    this.role = this.roles[Number(event.target.value)]
  }

  // capturarTexto(event: any) {
  //   console.log(event.target.value)
  // }
}
