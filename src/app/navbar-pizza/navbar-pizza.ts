import { Component } from '@angular/core';
import { Buscador } from '../buscador/buscador';

@Component({
  imports: [Buscador],
  selector: 'app-navbar-pizza',
  styleUrl: './navbar-pizza.scss',
  templateUrl: './navbar-pizza.html',
})
export class NavbarPizza {}
