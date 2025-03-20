import { inject, Injectable } from '@angular/core';
import { ICountry } from '../interfaces/icountry.interface';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private endPoint: string = 'https://restcountries.com/v3.1';
  private httpClient = inject(HttpClient);

  getAll(region:string): Promise<ICountry[]>{
    return lastValueFrom(this.httpClient.get<ICountry[]>(`${this.endPoint}/region/${region}`));
  }

  getByCca2(cca2: string): Promise<ICountry[]>{
    return lastValueFrom(this.httpClient.get<ICountry[]>(`${this.endPoint}/alpha/${cca2}`));
  }
}
