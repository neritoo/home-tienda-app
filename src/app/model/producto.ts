import { Categoria } from './categoria';

export class Producto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    imagen: string;
    descuento: boolean;
    categoria: Categoria;
}
