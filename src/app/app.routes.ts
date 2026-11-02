import { Routes } from '@angular/router';
import { ColumnasPizzas } from './columnas-pizzas/columnas-pizzas';
import { FomularioPedido } from './fomulario-pedido/fomulario-pedido';

export const routes: Routes = [
    { path: '', component: ColumnasPizzas },
    { path: 'catalogo-pizzas', component: ColumnasPizzas },
    { path: 'formulario-pedido', component: FomularioPedido }
];
