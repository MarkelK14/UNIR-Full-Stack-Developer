import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostsService } from '../../services/posts.service';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  postsService = inject(PostsService);
  guardarPost(form: any) {
    //console.log(form.value)
    if (form.value.title !== "" && form.value.author !== "" && form.value.date !== "" && form.value.body !== "" && form.value.url !== "") {
      //llevar el newPost al servicio, para ello tenemos que inyectar el servicio dentro de este componente.
      let response = this.postsService.insert(form.value);
      toast.success(response);

      form.reset();
    } else {
      toast.error('Todos los campos son obligatorios')
    }
  }
}
