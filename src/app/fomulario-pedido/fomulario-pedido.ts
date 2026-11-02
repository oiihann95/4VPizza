import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PedidoService } from '../servicios/pedido';

@Component({
  imports: [FormsModule],
  selector: 'app-formulario-pedido',
  styleUrl: './fomulario-pedido.scss',
  templateUrl: './fomulario-pedido.html',
})
export class FomularioPedido {
  pedidoService = inject(PedidoService);

  horaEntrega = "";
  direccion = "";
  metodoPago = "";
  numeroTarjeta = "";
  movil = "";
  mensajeValidacion = "";

  esOcultoTel = signal(true);
  esOcultoTar = signal(true);

  onClickBizum() {
    this.metodoPago = "bizum";
    this.esOcultoTel.set(false);
    this.esOcultoTar.set(true);
  }

  onClickTar() {
    this.metodoPago = "tarjeta";
    this.esOcultoTel.set(true);
    this.esOcultoTar.set(false);
  }

  validarFormulario(): boolean {
    if (this.horaEntrega === "") {
      this.mensajeValidacion = "Introduce la hora de entrega.";
      return false;
    }

    if (this.direccion.trim() === "") {
      this.mensajeValidacion = "Introduce la dirección de entrega.";
      return false;
    }

    if (this.metodoPago === "") {
      this.mensajeValidacion = "Selecciona un método de pago.";
      return false;
    }

    if (this.metodoPago === "tarjeta" &&
      (this.numeroTarjeta.length !== 16 || isNaN(Number(this.numeroTarjeta)))) {
      this.mensajeValidacion = "Introduce un número de tarjeta válido de 16 dígitos.";
      return false;
    }

    if (this.metodoPago === "bizum" &&
      (this.movil.length !== 9 || isNaN(Number(this.movil)))) {
      this.mensajeValidacion = "Introduce un número de móvil válido de 9 dígitos.";
      return false;
    }

    this.mensajeValidacion = "¡Gracias por tu pedido!";
    this.limpiarFormulario();
    return true;
  }

  limpiarFormulario() {
    this.pedidoService.pedido = []
    this.horaEntrega = "";
    this.direccion = "";
    this.metodoPago = "";
    this.numeroTarjeta = "";
    this.movil = "";
  }
  totalPedido: number = 0;
  calcularTotal() {
    this.totalPedido = 0;

    for (let i = 0; i < this.pedidoService.pedido.length; i++) {
      this.totalPedido += this.pedidoService.pedido[i].pizza.precio * this.pedidoService.pedido[i].cantidad;
    }

    return this.totalPedido;
  }
}
