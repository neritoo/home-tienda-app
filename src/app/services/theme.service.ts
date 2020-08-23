import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  @Output() theme: EventEmitter<boolean> = new EventEmitter();
  dark: boolean;

  constructor() {}

  enviarTema(dark: boolean) {
    this.dark = dark;
    this.theme.emit(dark);
  }

  recibirTema(): boolean {
    return this.dark;
  }
}
