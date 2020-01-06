import { Pipe, PipeTransform } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!args){
     
      return value;
    }else{
      args = args.toUpperCase();
     
    }
    return  value.filter(items => 
      items.topic.toUpperCase().startsWith(args)==true ||
      items.location.dictrict.toUpperCase().startsWith(args)==true
      // items.location.city.toUpperCase().startsWith(args)==true
      )
  }
}
