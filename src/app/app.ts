import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ColumnasPizzas } from './columnas-pizzas/columnas-pizzas';
import { FomularioPedido } from './fomulario-pedido/fomulario-pedido';
import { Footer } from './footer/footer';
import { NavbarPizza } from './navbar-pizza/navbar-pizza';

@Component({
  imports: [RouterOutlet, ColumnasPizzas, NavbarPizza, FomularioPedido, Footer],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  textoBusqueda: string = '';

  recibirTexto(texto: string) {
    this.textoBusqueda = texto;
  }
}
