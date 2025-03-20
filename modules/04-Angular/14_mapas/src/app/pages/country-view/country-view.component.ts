import { Component, inject, Input } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { ICountry } from '../../interfaces/icountry.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-country-view',
  imports: [RouterLink],
  templateUrl: './country-view.component.html',
  styleUrl: './country-view.component.css'
})
export class CountryViewComponent {
  @Input() code: string = "";
  country: ICountry | undefined;
  countriesService = inject(CountriesService);


  async ngOnInit() {
    console.log(this.code);

    //vamos a consultar al servicion los datos de un pais
    try{
      let response: ICountry[] = await this.countriesService.getByCca2(this.code);
      this.country = response[0];
      console.log(this.country);
    }catch(error){
      console.error(error);
    }
  }

  // mirar enlace con funciones para manejar objetos complejos
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

  extraerData(obj: any) : any {
    return Object.values(obj)[0];
  }

  extraerLanguages(obj: any) : string[] {
    return Object.values(obj);
  }

}
