import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IServicio } from '../../interfaces/iservicio.interface';
import { TrabajosService } from '../../services/trabajos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  trabajosServices = inject(TrabajosService)
  router = inject(Router)

  getDataForm(form: IServicio) {
    let response = this.trabajosServices.insert(form);
    if (response.success) {
      this.router.navigate(['/servicios'])
    }
  }
}
