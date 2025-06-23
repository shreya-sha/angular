import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
   // alert(value);
   let cy=new Date().getFullYear();
   let ub:any=new Date(value).getFullYear();
   let userage=cy-ub;
  return userage;
    
  }

}
