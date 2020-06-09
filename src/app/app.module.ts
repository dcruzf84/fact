import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
// import { FormControl } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModulMaterial }  from './module.material';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import {CapturaFacturaComponent, DialogContentDialog} from './captura-factura/captura-factura.component';
import { SolicitudPedidoComponent } from './solicitud-pedido/solicitud-pedido.component';
import { OrdenCompraComponent } from './orden-compra/orden-compra.component';
import { FacturasComponent } from './facturas/facturas.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    CapturaFacturaComponent,
    DialogContentDialog,
    HomeComponent,
    SolicitudPedidoComponent,
    OrdenCompraComponent,
    FacturasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModulMaterial,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    CapturaFacturaComponent,
    SolicitudPedidoComponent, 
    DialogContentDialog
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
