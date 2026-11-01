import { Component, input, OnChanges } from '@angular/core';


export class Pizza {
  nombre: string;
  ingredientes: string;
  imagen: string;
  precio: number;

  constructor(nombre: string, ingredientes: string, imagen: string, precio: number) {
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.imagen = imagen;
    this.precio = precio;
  }


}

@Component({
  imports: [],
  selector: 'app-columnas-pizzas',
  styleUrl: './columnas-pizzas.scss',
  templateUrl: './columnas-pizzas.html',
})

export class ColumnasPizzas implements OnChanges {


  pizzas: Pizza[] = [
    new Pizza("Pizza Margarita", "Tomate, mozzarella fresca, albahaca y un toque de aceite de oliva virgen extra.", "/margarita.jpg", 11.6),
    new Pizza("Pizza Barbacoa", "Salsa barbacoa, mozzarella, carne picada, pollo, bacon crujiente y un toque de cebolla morada.", "/barbacoa.jpg", 15.5),
    new Pizza(
      'Pizza 4 Quesos',
      'Crema de queso, mozzarella, gorgonzola, parmesano y un toque de provolone.',
      '/4quesos.jpg', 15.3
    ),
    new Pizza(
      'Pizza Pollo',
      'Salsa de tomate, mozzarella, tiras de pollo asado, champiñones y un toque de orégano.',
      '/pollo.jpg',
      12.6
    ),
    new Pizza(
      'Pizza Burrito',
      'Tortilla de trigo rellena de carne, tomate y alubias, acompañada de verduras frescas.',
      '/burrito.jpg',
      5.3
    ),
    new Pizza(
      'Pizza Hawaiana',
      'Salsa de tomate, mozzarella, jamón cocido y piña.',
      '/hawaiana.jpg',
      2.33
    ),
    new Pizza(
      'Pizza Napolitana',
      'Tomate, mozzarella fresca, albahaca y aceite de oliva virgen extra.',
      '/napolitana.jpg',
      11.5
    ),
    new Pizza(
      'Pizza de Chocolate',
      'Crema de chocolate, fresas y plátano.',
      '/choculate.jpg',
      10.3
    ),
  ];

  textoRecibido = input('');
  pizzasFiltrada: Pizza[] = this.pizzas;



  ngOnChanges() {
    this.filtrarPizzas();
  }

  filtrarPizzas() {
    this.pizzasFiltrada = [];
    const texto = this.textoRecibido().trim().toLowerCase();

    if (texto === '') {
      this.pizzasFiltrada = this.pizzas;
    } else {
      for (let i = 0; i < this.pizzas.length; i++) {
        const pizzaIngrediente = this.pizzas[i].ingredientes.toLowerCase();
        if (pizzaIngrediente.includes(texto)) {
          this.pizzasFiltrada.push(this.pizzas[i]);
        }
      }
    }


  }


  pedido: { pizza: Pizza, cantidad: number }[] = [];
  mostrar = true;
  clasePizza: string = "col-12 col-md-6 col-lg-3";

  mostrarCarrito() {
    this.mostrar = false;
  }

  totalPedido: number = 0;


  clickCart(pizza: Pizza, cantidad: string) {

    let encontrada = false;

    for (let i = 0; i < this.pedido.length; i++) {

      if (this.pedido[i].pizza.nombre == pizza.nombre) {
        this.pedido[i].cantidad += Number(cantidad);
        encontrada = true;
      }
    }

    if (encontrada == false) {
      this.pedido.push({ pizza, cantidad: Number(cantidad) });
    }

    this.mostrarCarrito();
    this.calcularTotal();
    this.clasePizza = "col-12 col-md-6 col-lg-4";
  }
  EliminarPizza(pizza: Pizza) {

    for (let i = 0; i < this.pedido.length; i++) {

      if (this.pedido[i].pizza.nombre == pizza.nombre) {

        this.pedido.splice(i, 1);

      }

    }
    this.calcularTotal()

  }
  calcularTotal() {
    this.totalPedido = 0;

    for (let i = 0; i < this.pedido.length; i++) {
      this.totalPedido += this.pedido[i].pizza.precio * this.pedido[i].cantidad;
    }
  }
}
