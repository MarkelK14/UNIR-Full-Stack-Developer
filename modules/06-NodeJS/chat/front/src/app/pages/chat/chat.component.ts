import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { io } from 'socket.io-client';
import { environment } from '../../../environments/environment';
import ChatMessage from '../../interfaces/chatMessage.interface';

@Component({
  selector: 'app-chat',
  imports: [ReactiveFormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

  socket = io(environment.wsUrl);
  messages: ChatMessage[] = [];
  clientsCount: number = 0;

  chatForm: FormGroup = new FormGroup({
    username: new FormControl(null),
    message: new FormControl(null)
  })

  ngOnInit() {
    this.socket.on('chat_message_server', (data: ChatMessage) => {
      // console.log('Received message from server:', data);
      this.messages.push(data);
    });

    this.socket.on('clients_count', (clients: number) => {
      console.log('Number of connected clients:', clients);
      this.clientsCount = clients;
    });

    this.socket.on('chat_init', (messages: ChatMessage[]) => {
      this.messages = messages;
    });
  }

  onSubmit () {
    this.chatForm.value.socketId = this.socket.id; // Add socketId to the form value to save it with the message
    this.socket.emit('chat_message_client', this.chatForm.value);
    // this.chatForm.reset(); // Reset the form after submission
    this.chatForm.get('message')?.reset(); // Reset only the message field
  }
  

}
