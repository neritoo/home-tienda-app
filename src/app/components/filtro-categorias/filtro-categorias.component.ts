import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Categoria } from '../../model/categoria';

@Component({
  selector: 'app-filtro-categorias',
  templateUrl: './filtro-categorias.component.html',
  styleUrls: ['./filtro-categorias.component.css']
})
export class FiltroCategoriasComponent implements OnInit {

  categorias: Categoria[];
  categoriasSelec: Categoria[];
  selectable: boolean;

  constructor(private productoService: ProductoService) {
    this.categorias = [];
    this.categoriasSelec = [];
  }

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias(): void {
    this.categorias = this.productoService.getCategorias();

    this.categorias.forEach( cat => {
      this.categoriasSelec.push(cat);
    });
  }

  remove(categoria: Categoria): void {
    const index = this.categoriasSelec.indexOf(categoria);

    if (index >= 0) {
      this.categoriasSelec.splice(index, 1);
    }

    this.categorias = this.productoService.getCategorias();

    console.log(this.categorias);
    console.log(this.categoriasSelec);
  }

  // agregarCategoria(event: any) {
  //   // console.log(event);
  //   let categoria;
  //   if (event.isUserInput) {
  //     categoria = new Categoria();
  //     categoria.nombre = event.source.value;
  //     this.categoriasSelec.push(categoria);
  //   } else {
  //     return ;
  //   }

  //   console.log(categoria);

  // }

  agregarCategoria(categoria: Categoria) {

    if (!this.categoriasSelec.includes(categoria)) {
      this.categoriasSelec.push(categoria);
    }

  }

}
