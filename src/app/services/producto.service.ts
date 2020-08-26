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
      nombre: 'MSI RTX 2080TI',
      descripcion: 'Placa de video MSI RTX 2080TI',
      precio: 60000,
      imagen: 'assets/images/rtx-2080ti.jpg',
      descuento: false,
      categoria: {
        id: 1,
        nombre: 'GPU'
      }
    },
    {
      id: 2,
      nombre: 'ASUS RTX 2070',
      descripcion: 'Placa de video ASUS RTX 2070',
      precio: 50000,
      imagen: 'assets/images/rtx-2070.png',
      descuento: true,
      categoria: {
        id: 1,
        nombre: 'GPU'
      }
    },
    {
      id: 3,
      nombre: 'Intel i7 7700K',
      descripcion: 'CPU Intel i7 Core 7700K',
      precio: 32500,
      imagen: 'assets/images/i7-7700k.jpg',
      descuento: false,
      categoria: {
        id: 2,
        nombre: 'CPU'
      }
    },
    {
      id: 4,
      nombre: 'Intel i7 8700K',
      descripcion: 'CPU Intel i7 Core 8700K',
      precio: 32500,
      imagen: 'assets/images/i7-8700k.jpg',
      descuento: false,
      categoria: {
        id: 2,
        nombre: 'CPU'
      }
    },
    {
      id: 5,
      nombre: 'ASUS RTX 1070',
      descripcion: 'Placa de video ASUS RTX 1070',
      precio: 38000,
      imagen: 'assets/images/rtx-1070-asus.jpg',
      descuento: true,
      categoria: {
        id: 1,
        nombre: 'GPU'
      },
    },
    {
      id: 6,
      nombre: 'ASUS ROG STRIX RTX 1060',
      descripcion: 'Placa de video ASUS RTX 1070',
      precio: 30000,
      imagen: 'assets/images/rtx-1060-asus.jpg',
      descuento: true,
      categoria: {
        id: 1,
        nombre: 'GPU'
      }
    },
    {
      id: 7,
      nombre: 'Ryzen 9 3900X',
      descripcion: 'Microprocesador Ryzen 3900x',
      precio: 80000,
      imagen: 'assets/images/ryzen-3900x.jpg',
      descuento: false,
      categoria: {
        id: 2,
        nombre: 'CPU'
      }
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
