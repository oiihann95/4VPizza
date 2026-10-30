import { Component, output } from '@angular/core';


@Component({
  selector: 'app-navbar-pizza',
  styleUrl: './navbar-pizza.scss',
  templateUrl: './navbar-pizza.html',
})
export class NavbarPizza {
  readonly buscar = output<string>();

  enviarTexto(texto: string) {
    this.buscar.emit(texto);
  }
}
