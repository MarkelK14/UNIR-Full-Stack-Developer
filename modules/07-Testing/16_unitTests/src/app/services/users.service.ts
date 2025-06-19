import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';


type ApiResponse = {
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  results: any[]
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  httpClient = inject(HttpClient)
  url: string = 'https://peticiones.online/api/users'
  data: any[] = [
    { id: 1, name: 'Juan', age: 43 },
    { id: 2, name: 'Lucia', age: 22 },
    { id: 3, name: 'Pepe', age: 12 },
    { id: 4, name: 'Mario', age: 45 },
    { id: 5, name: 'Felix', age: 34 },
  ]

  getSumAge(): number {
    let suma = this.data.reduce((acc, item) => acc + item.age, 0);
    return suma
  }

  getAllUserPromises(): Promise<ApiResponse> {
    return lastValueFrom(this.httpClient.get<ApiResponse>(this.url))
  }

  getAllUserObservable(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(this.url)
  }
}
