import { Component } from '@angular/core';
import { Url, tipoUrl } from './url';
import { UrldataService } from './urldata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private urlService: UrldataService) {}
  extension: string;
  get Urls() {
    return this.urlService.getUrls();
  }

  addUrl(nuevaUrl: Url) {
    this.extension = nuevaUrl.rutaurl.substring(
      nuevaUrl.rutaurl.length,
      nuevaUrl.rutaurl.length - 4
    );

    if (this.extension === '.png' || this.extension === '.jpg') {
      nuevaUrl.tipo = tipoUrl.IMAGEN;
    } else {
      nuevaUrl.tipo = tipoUrl.PAGINA;
    }
    console.log('tipoUrl>>>> ' + nuevaUrl.tipo);
    this.urlService.agregarUrl(nuevaUrl);
    nuevaUrl = new Url();
  }
  borrarUrl(url: Url) {
    this.urlService.borrarurlPorId(url.id);
  }
}
