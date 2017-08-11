import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(artists: any, term: any): any {
    if(term===undefined) return artists;
    return artists.filter(function(artist){
        return artist.address.toLowerCase().includes(term.toLowerCase());

    })
  }

}
