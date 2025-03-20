import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalReduce'
})
export class TotalReducePipe implements PipeTransform {

  transform(value: any[], ...args: string[]): number {
    console.log(args)
    let total = value.reduce((acc, producto) => acc + producto[args[0]], 0)
    return total
  }

}
