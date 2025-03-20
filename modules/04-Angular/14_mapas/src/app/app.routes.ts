import { Routes } from '@angular/router';
import { MapaComponent } from './pages/mapa/mapa.component';
import { CountryViewComponent } from './pages/country-view/country-view.component';

export const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "mapa" },
    { path: "mapa", component: MapaComponent },
    { path: "country/:code", component: CountryViewComponent },
    { path: "**", redirectTo: "mapa" }
];
