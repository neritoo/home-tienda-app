import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';
import { Categoria } from '../model/categoria';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: Producto[] = [
    {
      id: 1,
      nombre: 'RTX 2080TI',
      descripcion: 'Placa de video MSI RTX 2080TI',
      precio: 60000,
      imagen: 'assets/images/rtx-2080ti.jpg',
      descuento: false,
      categoria: 'GPU'
    },
    {
      id: 2,
      nombre: 'RTX 2070',
      descripcion: 'Placa de video ASUS RTX 2070',
      precio: 50000,
      imagen: 'assets/images/rtx-2070.jpg',
      descuento: true,
      categoria: 'GPU'
    },
    {
      id: 3,
      nombre: 'Intel i7 7700K',
      descripcion: 'CPU Intel i7 Core 7700K',
      precio: 32500,
      imagen: 'assets/images/i7-7700k.jpg',
      descuento: false,
      categoria: 'CPU'
    },
    {
      id: 4,
      nombre: 'Intel i7 8700K',
      descripcion: 'CPU Intel i7 Core 8700K',
      precio: 32500,
      imagen: 'assets/images/i7-8700k.jpg',
      descuento: false,
      categoria: 'CPU'
    }
  ];

  categorias: Categoria[] = [
    {
      id: 1,
      nombre: 'GPU'
    },
    {
      id: 2,
      nombre: 'CPU'
    }
  ];

  constructor() { }

  getProductos(): Producto[] {
    return this.productos;
  }

  getCategorias(): Categoria[] {
    return this.categorias;
  }

  buscarProductos(termino: any): Producto[] {
    let productos: Producto[] = [];
    termino = termino.toLowerCase();

    for (let i = 0; i < this.productos.length; i++) {
      let prod = this.productos[i];
      let nombreProd = prod.nombre.toLowerCase();
      
      if (nombreProd.indexOf(termino) >= 0) {
        productos.push(prod);
      }
    }

    return productos;

  }
}
