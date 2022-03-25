import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomquetions'
})
export class RandomquetionsPipe implements PipeTransform {

  transform(list: Array<any>): Array<any> {
    let newList = [...list];
    newList.sort(() => Math.random() - 0.5);
    if (!newList.includes(list)) {
      newList.push(list);
    }
    return newList;
  }
}
