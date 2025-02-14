import { Component } from "@angular/core";
import { INoticia } from "./interfaces/inoticia.interface";
import { ListadoNoticiasComponent } from "./components/listado-noticias/listado-noticias.component";
import { FormNoticiaComponent } from "./components/form-noticia/form-noticia.component";

@Component({
  selector: "app-root",
  imports: [ListadoNoticiasComponent, FormNoticiaComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css"
})
export class AppComponent {
  arrNoticias: INoticia[] = [];


  ngOnInit(): void {
    // Para modificar los datos: https://jsonblob.com/1339934620019515392
    fetch('https://jsonblob.com/api/jsonBlob/1339934620019515392')
    .then ((res) => res.json())
    .then((data) => {
      this.arrNoticias = data;
    })
  }

  getDataForm(event: INoticia): void {
    this.arrNoticias = [...this.arrNoticias, event];
  }
}
