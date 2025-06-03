import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IProduct } from '../interfaces/iproduct.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private httpClient = inject(HttpClient);
  private baseUrl = 'http://localhost:3000/api/products';

  create(body: FormData){
    return lastValueFrom(
      this.httpClient.post<IProduct>(this.baseUrl, body)
    );
  }

}
