import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchValue): any {
    if (!searchValue) {
      return value;
    }
    return value.filter((item) => {
      return item.surname.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ||
      item.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ||
      item.patronymic.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    });
  }

}
