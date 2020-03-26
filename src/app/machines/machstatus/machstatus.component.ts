import { Component } from '@angular/core';
import { MachstatusserviceService } from 'src/app/services/machstatusservice.service';
import { IMachstatuslogs, IMachstatusmodels } from 'src/app/interfaces/machstatusmodels';
import { IMachstatuslog } from 'src/app/interfaces/machstatuslog';
import { endpointdatas } from 'src/app/interfaces/endpointdatas';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-machstatus',
  templateUrl: './machstatus.component.html',
  styleUrls: ['./machstatus.component.css']
})
// Declaración de variables necesarias.
export class MachstatusComponent {
  public arraymachinestatus: Array<IMachstatuslog>;
  public arraymachmodels: Array<IMachstatuslogs>;
  public srcimg: string;
  public selidmach: number;
  public dateDay: string;
  public machstatusparams: any;

  constructor(public statusservice: MachstatusserviceService) {
    this.srcimg = '';
    this.dateDay = '';
    this.machstatusparams = 'inputDate: 2020-02-13, companyId: 2, shiftId: -1, machineTypeId: ';
    // this.getmachmodels();
  }
  // Función que recibe los datos desde endpoint y le asigna el "src" de la imagen según el estado y el tipo de maquina.
  public getstatuslog(machtype: number): void {
    this.dateDay = new Date().toLocaleString();
    this.statusservice.getAllMachineStatus(this.machstatusparams + machtype).subscribe((res: endpointdatas) => {
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
  // public getmachmodels(): void {
  //   this.statusservice.getdata('http://localhost:3000/machmodels').subscribe((res: Machstatusmodels) => {
  //   this.arraymachmodels = res.modelLogs;
  //   });
  // }
}
