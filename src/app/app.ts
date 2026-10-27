import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Buscador } from "./buscador/buscador";
import { ColumnasPizzas } from './columnas-pizzas/columnas-pizzas';
import { FomularioPedido } from './fomulario-pedido/fomulario-pedido';
import { NavbarPizza } from './navbar-pizza/navbar-pizza';

@Component({
  imports: [RouterOutlet, ColumnasPizzas, NavbarPizza, FomularioPedido, Buscador],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('4VPizza');
}
