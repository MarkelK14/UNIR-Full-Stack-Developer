import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recortarTexto'
})
export class RecortarTextoPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    console.log('args', args)
    let cantidad = args[0] || 20;
    let texto = value.slice(0, cantidad)
    return texto + (args[1] || '...');
  }

}
