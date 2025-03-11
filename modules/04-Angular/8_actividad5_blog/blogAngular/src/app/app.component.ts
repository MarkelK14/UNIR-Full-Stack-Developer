import { Component } from '@angular/core';
import { BlogComponent } from './components/blog/blog.component';
import { NgxSonnerToaster } from 'ngx-sonner';

@Component({
  selector: 'app-root',
  imports: [BlogComponent, NgxSonnerToaster],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blogAngular';
}
