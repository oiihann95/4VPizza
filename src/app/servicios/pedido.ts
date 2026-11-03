import { Injectable } from '@angular/core';
import { ItemPedido } from '../models/ItemPedido';

@Injectable({
    providedIn: 'root'
})
export class PedidoService {

    pedido: ItemPedido[] = [];

}