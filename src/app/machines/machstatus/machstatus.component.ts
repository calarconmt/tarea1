import { Component } from '@angular/core';
import { MachstatusserviceService } from 'src/app/services/machstatusservice.service';
import { Machstatuslogs, Machstatusmodels } from 'src/app/interfaces/machstatusmodels';
import { Machstatuslog } from 'src/app/interfaces/machstatuslog';
import { endpointdatas } from 'src/app/interfaces/endpointdatas';

@Component({
  selector: 'app-machstatus',
  templateUrl: './machstatus.component.html',
  styleUrls: ['./machstatus.component.css']
})
// Declaración de variables necesarias.
export class MachstatusComponent {
  public arraymachinestatus: Array<Machstatuslog>;
  public arraymachmodels: Array<Machstatuslogs>;
  public srcimg: string;
  public selidmach: number;
  public dateDay: string;

  constructor(public statusservice: MachstatusserviceService) {
    this.srcimg = '';
    this.dateDay = '';
    this.getmachmodels();
  }
  // Función que recibe los datos desde endpoint y le asigna el "src" de la imagen según el estado y el tipo de maquina.
  public getstatuslog(machtype: number): void {
    this.dateDay = new Date().toLocaleString();
    this.statusservice.getdata('http://localhost:3000/data').subscribe((res: endpointdatas) => {
    this.arraymachinestatus = res.statusLog;
    this.arraymachinestatus.forEach(element => {
      if (machtype == 1) {
        element.imgsrc = 'assets/images/' + '220_Jumbo - ' + element.statusName + '.png';
      }
      if (machtype == 2) {
        element.imgsrc = 'assets/images/' + '220_Manitou - ' + element.statusName + '.png';
      }
      if (machtype == 3) {
        element.imgsrc = 'assets/images/' + '220_Scoop - ' + element.statusName + '.png';
      }
    });
    });
  }
  // Función que recibe los datos desde endpoint para luego cargarlos en el "dropdown"
  public getmachmodels(): void {
    this.statusservice.getdata('http://localhost:3000/machmodels').subscribe((res: Machstatusmodels) => {
    this.arraymachmodels = res.modelLogs;
    });
  }
}
