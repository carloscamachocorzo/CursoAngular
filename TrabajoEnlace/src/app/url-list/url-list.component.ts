import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Url } from '../url';

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.sass']
})
export class UrlListComponent {
  constructor() {}

  @Input()
  UrlsList: Url[];

  @Output()
  removeUrl: EventEmitter<Url> = new EventEmitter();

  borrarUrl(urlEliminar: Url) {
    this.removeUrl.emit(urlEliminar);
  }
}
