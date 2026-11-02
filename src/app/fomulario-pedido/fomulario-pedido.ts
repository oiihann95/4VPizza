import { Component, inject, signal } from '@angular/core';
import { PedidoService } from '../servicios/pedido';

@Component({
  imports: [],
  selector: 'app-formulario-pedido',
  styleUrl: './fomulario-pedido.scss',
  templateUrl: './fomulario-pedido.html',
})
export class FomularioPedido {
  readonly pedidoService = inject(PedidoService);

  
  esOcultoTel = signal(true);
  esOcultoTar = signal(true);
  onClickBizum() {
    this.esOcultoTel.set(false);
    this.esOcultoTar.set(true);
  }
  onClickTar() {
    this.esOcultoTel.set(true);
    this.esOcultoTar.set(false);
  }
}