import { Component,  Output, EventEmitter } from '@angular/core';
import { Url } from '../url';

@Component({
  selector: 'app-url-input',
  templateUrl: './url-input.component.html',
  styleUrls: ['./url-input.component.sass']
})
export class UrlInputComponent {
  nuevaUrl: Url = new Url();

  constructor() {}

  @Output()
  add: EventEmitter<Url> = new EventEmitter();

  addUrllocal() {
    this.add.emit(this.nuevaUrl);
    this.nuevaUrl = new Url();
  }
}
