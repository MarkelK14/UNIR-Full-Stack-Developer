import { Component } from '@angular/core';
import { AlumnosListComponent } from "./components/alumnos-list/alumnos-list.component";

@Component({
  selector: 'app-root',
  imports: [AlumnosListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'servicios';
}
