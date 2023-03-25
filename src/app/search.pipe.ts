import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(searchArray: string[], searchInput: string): any[] {
    if(!searchInput){
      return []
    }
    searchInput=searchInput.toLowerCase();
    return searchArray.filter(x=>x.toLowerCase().includes(searchInput))
    
  }

}
