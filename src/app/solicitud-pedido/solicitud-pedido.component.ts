import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';

import { INotas } from '../Models/INota';
import { ITPresupuesto } from '../Models/ITPresupuesto';
import { IServicio } from '../models/IServicio';

@Component({
  selector: 'app-solicitud-pedido',
  templateUrl: './solicitud-pedido.component.html',
  styleUrls: ['./solicitud-pedido.component.css']
})



export class SolicitudPedidoComponent implements OnInit {
  date = new FormControl(new Date());
  vProcedencia = '';
  panelOpenState = false;
  vConcepto = '';
  
  displayedColumns: string[] = ['idNota', 'nota', 'fecha'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
 

  applyFilter(filterValue: string) {
     this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  tPresupuesto: ITPresupuesto[] = [
    { tipo: 'Gasto', id: 1 },
    { tipo: 'Inversión', id: 2 }
  ];

  tServicio: IServicio[] = [
    {id:1,servicio:'SOPORTE'},
    {id:2,servicio:'SOFTWARE'},
    {id:3,servicio:'SOPORTE Y SOFTWARE'},
    {id:4,servicio:'HARDWARE'}
  ];

  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) { }

  onSave() {
    this._snackBar.open('Registro Guardado', 'Correctamente', {
      duration: 3000,
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export class DialogContentDialog { }

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



