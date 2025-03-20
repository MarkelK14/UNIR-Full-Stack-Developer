import { Component, inject } from '@angular/core';
import { GoogleMap, MapAdvancedMarker, MapInfoWindow } from '@angular/google-maps';
import { CountriesService } from '../../services/countries.service';
import { ICountry } from '../../interfaces/icountry.interface';

@Component({
  selector: 'app-mapa',
  imports: [GoogleMap, MapAdvancedMarker, MapInfoWindow],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent {
  center: google.maps.LatLngLiteral = { lat: 40, lng: -3 };
  arrCountries: ICountry[] = [];
  countriesService = inject(CountriesService);

  ngOnInit() {
    //pedirle al navegador cual es mi posicion, con una API nativa de JS
    navigator.geolocation.getCurrentPosition((position) => {
      console.log('position', position);
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      
    });
    this.getRegion();
  }

  async getRegion(region: string = "europe"){
    try{
      this.arrCountries = await this.countriesService.getAll(region);
      this.arrCountries.map(country => country.markerIconImg = this.createMarkerIcon(country));
      console.log(this.arrCountries);
    }catch (error){
      console.error(error)
    }
  }

  createMarkerIcon(country: ICountry){
    //crear un elemento del DOM de tipo img con su src y sus estilos
    const img = document.createElement('img');
    img.src = country.flags.png;
    img.alt = country.flags.alt;
    img.width = 40;
    img.height = 40;
    img.style.borderRadius = '50%';
    img.style.border = '3px solid tomato';
    img.style.boxShadow = '0 0 5px tomato';

    return img;
  }

  openInfoWindow(marker: MapAdvancedMarker, infoWindow: MapInfoWindow){
    infoWindow.open(marker);
  }

  getSelectedRegion(event: any){
    console.log(event.target.value);
    this.getRegion(event.target.value);
  }
}
