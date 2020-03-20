import { Component } from '@angular/core';
import { MachstatusserviceService } from 'src/app/services/machstatusservice.service';
import { NgModule } from '@angular/core';
// tslint:disable-next-line: max-line-length
import { Machstatusinterface, Machstatusinterfacelog, Machstatusinterfacemodels, Machstatusinterfacemodellogs } from 'src/app/interfaces/machstatusinterface';

@Component({
  selector: 'app-machstatus',
  templateUrl: './machstatus.component.html',
  styleUrls: ['./machstatus.component.css']
})
export class MachstatusComponent {
  public arraymachinestatus: Array<Machstatusinterfacelog>;
  public arraymachmodels: Array<Machstatusinterfacemodellogs>;
  public srcimg: string;
  public selidmach: number;
  public dateDay: string;

  constructor(public statusservice: MachstatusserviceService) {
    this.srcimg = '';
    this.dateDay = '';
  }

  public getstatuslog(): void {
    this.dateDay = new Date().toLocaleString();
    this.statusservice.getdata('http://localhost:3000/data').subscribe((res: Machstatusinterface) => {
    this.arraymachinestatus = res.statusLog;
    });
  }
  public getmachmodels(): void {
    this.statusservice.getdata('http://localhost:3000/machmodels').subscribe((res: Machstatusinterfacemodels) => {
    this.arraymachmodels = res.modelLogs;
    });
  }
}
