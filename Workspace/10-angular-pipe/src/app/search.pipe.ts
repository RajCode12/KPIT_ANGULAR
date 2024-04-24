import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr: string[], param: string): string[] {
    return arr.filter((val)=> val.indexOf(param) !== -1);
    // return arr.filter((val)=>{
    //   if(val.indexOf(param) != -1) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // });
  }
}
