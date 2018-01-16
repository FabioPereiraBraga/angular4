import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let dateArray = value.split('-');
    let date = new Date(dateArray[0],dateArray[1]-1,dateArray[2]); 
    return new Intl.DateTimeFormat('pt-BR').format(date);
  }

}
