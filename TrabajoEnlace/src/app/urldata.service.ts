import { Injectable } from '@angular/core';
import { Url } from './url';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';



@Injectable({
  providedIn: 'root'
})
export class UrldataService {
  ultimoId = 0;
  miurl: Url[] = [];

  constructor(private sanitizer: DomSanitizer) { }

  /*creacion de metodos de agregar, consultar, eliminar y actualizar */
  agregarUrl(nuevaurl: Url): UrldataService {

    if (!nuevaurl.id) {
      nuevaurl.id = ++this.ultimoId;

    }
    this.miurl.push(nuevaurl);
    return this;
  }
  /*eliminar */
  borrarurlPorId(id: number) {
    this.miurl = this.miurl.filter(it => it.id !== id);
  }
  getUrls(): Url[] {
/*     //this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.miurl[].rutaurl); */

    console.log(this.miurl);
    return this.miurl;
  }

}

