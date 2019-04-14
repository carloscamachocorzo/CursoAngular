import { SafeUrl } from '@angular/platform-browser';

export class Url {
  id: number;
  rutaurl: string;
  tipo: tipoUrl;

  /*inicializa los valores del constructor*/
  constructor(values: object = {}) {
    Object.assign(this, values);
  }
  /*    constructor(id: number, rutaurl: string) {
     this.id = id;
     this.rutaurl = rutaurl;
   } */
}

export enum tipoUrl {
  IMAGEN = 0,
  PAGINA = 1
}
