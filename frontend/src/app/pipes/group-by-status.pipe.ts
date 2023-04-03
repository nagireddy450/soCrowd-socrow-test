import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupByStatus',
})
export class GroupByStatusPipe implements PipeTransform {
  transform(collection: any[], property: string) {
    let sampleObj: any;
    // prevents the application from breaking if the array of objects doesn't exist yet
    if (!collection) {
      return null;
    }
    const groupedCollection = collection.reduce((previous, current) => {
      if (!previous[current[property]]) {
        previous[current[property]] = [current];
      } else {
        previous[current[property]].push(current);
      }
      return previous;
    }, {});

    sampleObj = Object.keys(groupedCollection)
      .map((key) => ({ key, value: groupedCollection[key] }));
      console.log(sampleObj);
    sampleObj = sampleObj.sort((a:any,b:any) => (a.key > b.key) ? 1 : ((b.key > a.key) ? -1 : 0)).reverse();
    sampleObj.map((item: any) => {
      if(item.key === 'In game') {
        return this.sortByDuration(item.value);
      }
      else
      return this.sortByDuration(item.value).reverse();
    });
    return sampleObj;
  }
  sortByDuration(_array: any) {
    let field = 'timeDuration';
    _array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return 1;
      } else if (a[field] > b[field]) {
        return -1;
      } else {
        return 0;
      }
    });
    return _array;
  }
}
