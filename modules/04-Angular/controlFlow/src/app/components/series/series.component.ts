import { Component, Input } from '@angular/core';
import { ISerie } from '../../interfaces/iserie.interface';

@Component({
  selector: 'app-series',
  imports: [],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {
  @Input() misSeries: ISerie[] = []
  series: ISerie[] = [];
  categorias: string[] = ['Accion', 'Terror', 'Comedia', 'Documentales', 'Romanticas'];

  capturarCategoria(event: any) {
    //console.log(event.target.value)
    this.series = this.misSeries.filter(serie => serie.category.includes(event.target.value))
  }

  ngOnInit() {
    this.series = this.misSeries
  }
}
