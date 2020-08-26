import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  tema: string;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.temaEvent.subscribe(tema => this.tema = tema);
    this.tema = this.themeService.getTema();
  }

}
