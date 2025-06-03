import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

type LoginBody = { username: string, password: string };

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private httpClient = inject(HttpClient);
  private baseUrl = 'http://localhost:3000/api/users'; 

  login(body: LoginBody) {
    return lastValueFrom(
      this.httpClient.post<{token: string}>(`${this.baseUrl}/login`, body)
    )
  }

}
