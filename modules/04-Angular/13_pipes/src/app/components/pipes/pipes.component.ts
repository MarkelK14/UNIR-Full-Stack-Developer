import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { VueltaPipe } from '../../pipes/vuelta.pipe';
import { RecortarTextoPipe } from '../../pipes/recortar-texto.pipe';
import { TotalReducePipe } from '../../pipes/total-reduce.pipe';

@Component({
  selector: 'app-pipes',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DecimalPipe, PercentPipe, CurrencyPipe, DatePipe, JsonPipe, VueltaPipe, RecortarTextoPipe, TotalReducePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  nombre: string = "Juan Antonio"
  racional: number = 32.12353563456436;
  iva: number = 0.21;
  precio: number = 39.90;
  fecha = new Date();

  array: number[] = [1, 2, 3, 4, 5, 6, 7]
  arrayJson: any[] = [{ id: 1, name: 'Juan' }, { id: 2, name: 'Pepe' }]
  texto: string = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore rem aut deleniti vel quasi, harum vitae? Aliquid ipsam culpa voluptatem id adipisci. Ullam pariatur minima, quam molestiae odio eius, sit, commodi dignissimos repudiandae nulla consectetur voluptatem eum aspernatur sequi sapiente quae? Veritatis, ipsum? Aspernatur totam
  consectetur doloremque laborum ipsum nobis et ab perferendis, quae eos natus libero enim velit commodi aut, delectus
  sint dicta, nisi sequi reprehenderit eum iusto ipsam neque? Quia, quam quo quod laborum accusantium eveniet fugit
  natus exercitationem provident illo ipsam hic, non soluta, nobis error? Veritatis amet molestiae culpa expedita rerum
  dolorem quis laboriosam architecto, odit, corrupti possimus minus nobis vitae beatae facere sunt quia dignissimos
  totam ea ad vel natus minima fugiat quasi! Consequuntur officia asperiores, sed qui inventore corrupti fuga.Autem
  neque tenetur cumque necessitatibus, non iusto nihil, laborum, voluptatum odio est eius dolores incidunt veniam
  aspernatur nemo eaque optio accusamus sapiente a quos. Numquam quos quia culpa. Impedit eius ipsum illo excepturi modi
  cumque corporis quasi iste delectus id doloremque aliquam beatae repellendus adipisci, suscipit exercitationem eum aut
  veritatis soluta temporibus deleniti odio natus neque! Voluptate blanditiis ex vel reiciendis iste et error deleniti?
  Ad dolore perspiciatis fugiat dolorem voluptates rem rerum nulla?`
  productos: any[] = [{ id: 1, name: 'Leche', precio: 34 }, { id: 2, name: 'carne', precio: 23 }, { id: 3, name: 'pescado', precio: 43 },]

  alumnos: any[] = [{ id: 1, name: 'juan', edad: 10 }, { id: 2, name: 'pepe', edad: 10 }, { id: 3, name: 'lucia', edad: 10 },]
}
