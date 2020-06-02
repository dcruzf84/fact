import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CapturaFacturaComponent } from './captura-factura/captura-factura.component';
import { SolicitudPedidoComponent } from './solicitud-pedido/solicitud-pedido.component';
import { OrdenCompraComponent } from './orden-compra/orden-compra.component';


const routes: Routes = [
  { path: 'factura', component: CapturaFacturaComponent },
  { path: 'sp', component: SolicitudPedidoComponent } ,
  { path: 'oc', component: OrdenCompraComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
