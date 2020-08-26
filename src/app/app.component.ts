import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tema: string;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.temaEvent.subscribe(tema => this.tema = tema);
    this.tema = this.themeService.getTema();
  }

}
