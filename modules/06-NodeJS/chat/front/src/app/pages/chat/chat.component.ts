import { Component } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-chat',
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

  socket = io(environment.wsUrl);
  

}
