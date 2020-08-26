import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  @Output() temaEvent: EventEmitter<string> = new EventEmitter();

  constructor() {}

  setTema(tema: string): void {
    localStorage.setItem('tema', tema);
    this.temaEvent.emit(tema);
  }

  getTema(): string {
    return localStorage.getItem('tema');
  }
}
