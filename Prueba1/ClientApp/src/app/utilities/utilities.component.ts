import { Component } from '@angular/core';

@Component({
  selector: 'app-utilities',
  templateUrl: './utilities.component.html'
})
export class UtilitiesComponent {
    public sSelected = "Por favor selecciona un servicio :)";
    public sBoton:string;
    public show = false;
    clickButton(i:number)
    {
      if (i===1) {this.sBoton="Luz";}
      if (i===2) {this.sBoton="Gas";}
      if (i===3) {this.sBoton="Agua";}
      if (i===4) {this.sBoton="Drenaje";}
      this.sSelected="Seleccionaste: "+this.sBoton;
    }
  }
