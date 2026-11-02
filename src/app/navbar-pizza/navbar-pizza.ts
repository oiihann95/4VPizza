import { Component, output } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-navbar-pizza',
  styleUrl: './navbar-pizza.scss',
  templateUrl: './navbar-pizza.html',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
})
export class NavbarPizza {
  readonly buscar = output<string>();

  enviarTexto(texto: string) {
    this.buscar.emit(texto);
  }
}
