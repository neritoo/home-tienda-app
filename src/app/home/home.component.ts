import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos: Producto[];
  
  constructor(private productoService: ProductoService) {

  }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(): void {
    this.productos = this.productoService.getProductos();
  }

}
