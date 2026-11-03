import { Pizza } from "./Pizzas";
export class ItemPedido {
    pizza: Pizza;
    cantidad: number;

    constructor(pizza: Pizza, cantidad: number) {
        this.pizza = pizza;
        this.cantidad = cantidad;
    }
}