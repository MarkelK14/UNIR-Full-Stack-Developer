import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-model',
  imports: [ReactiveFormsModule],
  templateUrl: './form-model.component.html',
  styleUrl: './form-model.component.css'
})
export class FormModelComponent {
  // aqui teneis todo el listado de validadores de la libreria https://angular.dev/api/forms/Validators#

  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      nombre: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern(/^\w+\@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
      ]),
      dni: new FormControl(null, [
        this.dniValidator
      ]),
      edad: new FormControl(null, [
        Validators.required,
        Validators.min(18),
        Validators.max(65)
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16)
      ]),
      repitepassword: new FormControl("", []),
    }, [])
  }

  getDataForm() {
    console.log(this.userForm.value)
    this.userForm.reset()
  }

  checkControl(controlName: string, errorName: string): boolean | undefined {
    return this.userForm.get(controlName)?.hasError(errorName) && this.userForm.get(controlName)?.touched
  }

  dniValidator(controlName: AbstractControl): any {
    //validar un dni esta descrito que tiene que tener 8 caracteres de tipo numerico y la letra mayuscula. expresiones regulares.
    // tiene que permitecer un array que te proporciona la fabrica de moneda y timbre.
    // numero % 23 = 7
    // el siete es la posicion de la letra dentro de array que os he comentado.
    const letrasDni: string[] = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    let dni: string = controlName.value;
    if (dni) {
      dni = dni.toUpperCase()
    }
    const exp = /^\d{8}[A-Z]{1}/
    if (exp.test(dni)) {
      // separar la letra del numero.
      const letra: string | undefined = dni.at(-1);
      const numero: number = Number(dni.substring(0, dni.length - 1))
      const posicion = numero % 23;

      return (letrasDni[posicion] !== letra) ? { 'dnivalidator': 'La letra del dni no corresponde con numero' } : null

    } else {
      return { 'dnivalidator': 'Formato del dni incorrecto' }
    }

    return {};
  }

}
