import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFactura } from '../models/IFactura';


@Injectable({
  providedIn: 'root'
})
export class ServFacturaService {

  constructor(private htt: HttpClient) { }

  getFacturas() {
    return this.htt.get<IFactura[]>('http://localhost:40000/factura?opc=1&idFact=0');
  }
}


//https://unprogramador.com/consumir-webservices-con-angular-y-httpclient/