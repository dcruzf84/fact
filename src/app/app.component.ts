import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SPA-Diand';

  mostrar: boolean=true;
  lista=[0,1,2,3];

 Clientes= [{
    id: 0,
    cartera: 'Sin definir',
    nombre: 'Juan'
  },
  {
    id: 1,
    cartera: 'Activos',
    nombre: 'Pablo'
  },
  {
    id: 2,
    cartera: 'Inactivos',
    nombre: 'Carlos'
  },
  {
    id: 3,
    cartera: 'Deudores',
    nombre: 'Pedro'
  },
];

selection='';
checkedOPc: boolean=true;
checkedColor:boolean=false;
checkedGrande:boolean=false;
modificarWH = 100;

onSelected(cliente){
  console.log("Cartera:" + cliente.cartera);
  console.log(cliente);
}

onToggle(){
  this.mostrar=!this.mostrar;
}

}
