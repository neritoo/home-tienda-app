import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Categoria } from '../../model/categoria';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-filtro-categorias',
  templateUrl: './filtro-categorias.component.html',
  styleUrls: ['./filtro-categorias.component.css']
})
export class FiltroCategoriasComponent implements OnInit {

  categorias: Categoria[];
  categoriasSelec: Categoria[];
  selectable: boolean;
  @Output() categoriasEvent = new EventEmitter<Categoria[]>();

  tema:string;

  constructor(private productoService: ProductoService, private themeService: ThemeService) {
    this.categorias = [];
    this.categoriasSelec = [];
  }

  ngOnInit(): void {
    this.getCategorias();
    this.enviarCategorias();
    this.themeService.temaEvent.subscribe(tema => this.tema = tema);
    this.tema = this.themeService.getTema();
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

    this.enviarCategorias();
  }

  agregarCategoria(categoria: Categoria) {

    if (!this.categoriasSelec.includes(categoria)) {
      this.categoriasSelec.push(categoria);
    }

    this.enviarCategorias();
  }

  enviarCategorias() {
    this.categoriasEvent.emit(this.categoriasSelec);
  }

}
