import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  dark: boolean;
  
  constructor(private router: Router, private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.enviarTema(this.dark);
  }

  buscarProducto(buscar: string): void {
    if (buscar !== '') {
      this.router.navigate(['/home', buscar]);
    } else {
      this.router.navigate(['home']);
    }
  }

  cambiarTema() {
    this.dark = !this.dark;
    this.themeService.enviarTema(this.dark);
  }

}
