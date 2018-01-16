import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatMoney'
})
export class FormatMoneyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return  Intl.NumberFormat('pt-BR',{ style: 'currency', currency: 'BRL' }).format(value);
  }

}
