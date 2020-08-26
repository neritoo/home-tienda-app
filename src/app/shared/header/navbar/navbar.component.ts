import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  tema: string;
  
  constructor(private router: Router, private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.temaEvent.subscribe(tema => this.tema = tema);
    this.tema = this.themeService.getTema();
  }

  buscarProducto(buscar: string): void {
    if (buscar !== '') {
      this.router.navigate(['/home', buscar]);
    } else {
      this.router.navigate(['home']);
    }
  }
}
