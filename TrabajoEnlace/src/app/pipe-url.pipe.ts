import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'pipeUrl'
})
export class PipeUrlPipe implements PipeTransform {

  constructor(private urlSanitizer: DomSanitizer) { }
  /* transform(value: any, args?: any): any {
    return null;
  } */
  transform(value: string, url: string = ''): any {
    return this.urlSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }


}
