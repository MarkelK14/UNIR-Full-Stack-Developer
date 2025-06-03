import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usersService = inject(UsersService);

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null)
  });

  async onSubmit() {
    try {
      const response = await this.usersService.login(this.loginForm.value);
      localStorage.setItem('shop_token', response.token);
      console.log(response);
    } catch (error) {
      console.error('Login failed:', error);
    }
  }

}
