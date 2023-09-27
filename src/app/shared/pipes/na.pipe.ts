import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na'
})
export class NaPipe implements PipeTransform {

  transform(manager?: string, isManager?: boolean): unknown {
    return isManager ? "N/A" : manager;
  }

}
