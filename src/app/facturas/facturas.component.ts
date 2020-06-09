import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { INotas } from '../Models/INota';
import { ITipoMoneda } from '../Models/ITipoMoneda';
import { ServFacturaService } from '../services/serv-factura.service';
import { IFactura } from '../models/IFactura';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  facturasArr: IFactura[] = [];
  displayedColumns: string[] = ['idNota', 'nota', 'fecha', 'select'];

  dataSource = new MatTableDataSource<INotas>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  tipoMonedas: ITipoMoneda[] = [
    { tipoMoneda: 'MXN', idMoneda: 1 },
    { tipoMoneda: 'USD', idMoneda: 2 }
  ];

  constructor(public servFactura: ServFacturaService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.servFactura.getFacturas()
    .subscribe(
      facturaSubcribe => { 
        console.log(facturaSubcribe);
        this.facturasArr = facturaSubcribe;            
      },
      err=> {
        console.error(err)
      }
    );
  }

}


function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

const ELEMENT_DATA: INotas[] = [
  { idNota: 1, nota: 'Hydrogen fsafdsf asdfadsf ssadfsadfsd safsaf  sdafsdf sasadfsadf a asfasdf  dsf adsf 213213132131321321321312312312321321312213213123', fecha: '23/01/2019' },
  { idNota: 2, nota: 'Helium', fecha: '01/01/2019' },
  { idNota: 3, nota: 'Lithium', fecha: '03/04/2020' },
  { idNota: 4, nota: 'Beryllium', fecha: '01/04/2020' },
  { idNota: 5, nota: 'Boron', fecha: '03/04/2020' },
  { idNota: 6, nota: 'Carbon', fecha: '10/03/2020' },
  { idNota: 7, nota: 'Nitrogen', fecha: '03/02/2020' },
  { idNota: 8, nota: 'Oxygen', fecha: '03/02/2020' },
  { idNota: 9, nota: 'Fluorine', fecha: '03/02/2020' },
  { idNota: 10, nota: 'Neon', fecha: '03/01/2020' },
  { idNota: 11, nota: 'Sodium', fecha: '03/02/2020' },
  { idNota: 12, nota: 'Magnesium', fecha: '03/01/2020' },
  { idNota: 13, nota: 'Aluminum', fecha: '03/01/2020' },
  { idNota: 14, nota: 'Silicon', fecha: '03/02/2020' },
  { idNota: 15, nota: 'Phosphorus', fecha: '03/02/2020' },
  { idNota: 16, nota: 'Sulfur', fecha: '03/02/2020' },
  { idNota: 17, nota: 'Chlorine', fecha: '03/01/2020' },
  { idNota: 18, nota: 'Argon', fecha: '03/01/2020' },
  { idNota: 19, nota: 'Potassium', fecha: '03/01/2020' },
  { idNota: 20, nota: 'Calcium', fecha: '03/02/2020' }
];
