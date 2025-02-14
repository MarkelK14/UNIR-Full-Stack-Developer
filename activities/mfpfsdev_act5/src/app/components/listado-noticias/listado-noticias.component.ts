import { Component, Input } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';

@Component({
  selector: 'app-listado-noticias',
  imports: [],
  templateUrl: './listado-noticias.component.html',
  styleUrl: './listado-noticias.component.css'
})
export class ListadoNoticiasComponent {
  @Input() misNoticias: INoticia[] = [];
  noticias: INoticia[] = [];
  texto: string = "";
  categorias: string[] = ['Tecnología', 'Política', 'Deportes'];

  ngOnInit() {
    this.noticias = this.misNoticias;
    console.log('noticias', this.noticias);
    console.log('misNoticias', this.misNoticias);
  }

  ngDoCheck() {
    // this.noticias = this.misNoticias.filter(noticia => noticia.categoria.includes(''))
    console.log('ListadoNoticiasComponent.ngDoCheck')
  }

  capturarCategoria(event: any) {
    console.log('capturarCategoria.noticias', this.noticias);
    // this.noticias = this.misNoticias.filter(noticia => noticia.categoria.includes(event.target.value))
    this.noticias = this.misNoticias.filter(noticia => noticia.categoria.includes(event.target.value))
  }
}