import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, QuillModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  tinyForm: FormGroup;
  texto: string = "";
  constructor() {
    this.tinyForm = new FormGroup({
      title: new FormControl("", []),
      content: new FormControl("", [])
    }, [])
  }

  getDataForm() {
    console.log(this.tinyForm.value)

    this.texto = this.tinyForm.value.content;
  }
}
