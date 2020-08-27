import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  tema: string;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.temaEvent.subscribe(tema => this.tema = tema);
    this.tema = this.themeService.getTema();
  }

  setTema(tema: string): void {
    this.themeService.setTema(tema);
    this.tema = this.getTema();
  }

  getTema(): string {
    return this.themeService.getTema();
  }

}
