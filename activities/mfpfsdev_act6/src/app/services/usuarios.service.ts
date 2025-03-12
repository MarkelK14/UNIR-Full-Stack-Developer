import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IResponse } from '../interfaces/iresponse.interface';
import { IUsuario } from '../interfaces/iusuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  // para que un servicio pueda hacer una petición tiene que inyectar el httpClient
  private httpClient = inject(HttpClient)
  private baseUrl: string = "https://peticiones.online/api/users";

  getAllPromise(): Promise<IResponse> {
    return lastValueFrom(this.httpClient.get<IResponse>(this.baseUrl))
  }

  getById(id: string): Promise<IUsuario> {
    return lastValueFrom(this.httpClient.get<IUsuario>(`${this.baseUrl}/${id}`))
  }
}
