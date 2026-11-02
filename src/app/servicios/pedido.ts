import { Injectable } from '@angular/core';
import { ItemPedido } from '../columnas-pizzas/columnas-pizzas';

@Injectable({
    providedIn: 'root'
})
export class PedidoService {

    pedido: ItemPedido[] = [];

}