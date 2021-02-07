import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPipe',
  pure: true
})
export class SortPipePipe implements PipeTransform {

  transform(arrayList: any[], columnName: string): any[] {
    let sortedArrayList = arrayList.sort((x, y) => {
      if (x[columnName] > y[columnName]) return 1;
      else if (x[columnName] < y[columnName]) return -1;
      else return 0;
    })
    return sortedArrayList;
  }

}
