import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: Producto[] = [
    {
      nombre: 'RTX 2080TI',
      descripcion: 'Placa de video MSI RTX 2080TI',
      precio: 60000,
      imagen: 'assets/images/rtx-2080ti.jpg'
    },
    {
      nombre: 'RTX 2070',
      descripcion: 'Placa de video ASUS RTX 2070',
      precio: 50000,
      imagen: 'assets/images/rtx-2070.jpg'
    },
    {
      nombre: 'Intel i7 7700K',
      descripcion: 'CPU Intel i7 Core 7700K',
      precio: 32500,
      imagen: 'assets/images/i7-7700k.jpg'
    },
    {
      nombre: 'Intel i7 8700K',
      descripcion: 'CPU Intel i7 Core 8700K',
      precio: 32500,
      imagen: 'assets/images/i7-8700k.jpg'
    }
  ];

  constructor() { }

  getProductos(): Producto[] {
    return this.productos;
    console.log(this.productos);
  }
}
