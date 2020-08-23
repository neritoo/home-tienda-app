import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../model/producto';
import { ProductoService } from '../services/producto.service';
import { Categoria } from '../model/categoria';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos: Producto[];
  productosFiltrados: Producto[];
  productosCategoria: Producto[] = [];
  
  busqueda: boolean;
  
  constructor(private productoService: ProductoService, private activatedRoute: ActivatedRoute) {
    this.productos = [];
    this.productosFiltrados = [];
    this.busqueda = false;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      const termino = params.buscar;
      if (termino !== null && termino !== undefined) {
        this.busqueda = true;
        this.productosFiltrados = this.productoService.buscarProductos(termino);
      }
    });
    this.getProductos();
  }

  getProductos(): void {
    this.productos = this.productoService.getProductos();
  }
  
  filtrarPorCategoria(event: Categoria[]) {
    let categorias: Categoria[] = [];
    event.forEach(cat => {
      categorias.push(cat);
    });
  
    let productos: Producto[] = [];

    this.productos.forEach(producto => {
      categorias.some(cat => {
        if (producto.categoria.nombre == cat.nombre) {
          productos.push(producto);
        }
      })
    });

    this.productosCategoria = productos;
  }

}
