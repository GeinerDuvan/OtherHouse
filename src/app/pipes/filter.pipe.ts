import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
      const resultCasa = [];
      for (const cas of value){
        if (cas.title.toLowerCase().indexOf(arg.toLowerCase()) > -1 ){
          resultCasa.push(cas);
        };
      };
      return resultCasa
  }

}
