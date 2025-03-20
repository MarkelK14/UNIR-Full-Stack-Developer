import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vueltecita'
})
export class VueltaPipe implements PipeTransform {

  transform(value: string) {
    //logica del pipe tony stark - Iron Man
    let array = value.split(' - ');
    let reverse = array.reverse()
    return reverse.join(" - ");
  }

}
