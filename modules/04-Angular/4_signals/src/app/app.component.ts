import { Component } from '@angular/core';
import { ContadorComponent } from './components/contador/contador.component';
import { SignalInputsComponent } from "./components/signal-inputs/signal-inputs.component";
import { ComputedComponent } from "./components/computed/computed.component";


@Component({
  selector: 'app-root',
  imports: [ContadorComponent, SignalInputsComponent, ComputedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nombre: string = 'Daniel';
  edad: number = 42;
}
