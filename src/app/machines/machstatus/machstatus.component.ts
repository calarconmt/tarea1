import { Component } from '@angular/core';
import { MachstatusserviceService } from 'src/app/services/machstatusservice.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
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
  startDate = new Date(1990, 0, 1);

  constructor(public statusservice: MachstatusserviceService) {
    this.srcimg = '';
    this.dateDay = '';
    this.getmachmodels();
  }

  public getstatuslog(value: number, num: string): void {
    this.dateDay = new Date().toLocaleString();
    this.statusservice.getdata('http://localhost:3000/data').subscribe((res: Machstatusinterface) => {
    this.arraymachinestatus = res.statusLog;
    });
    console.log(value, num);
  }
  public getmachmodels(): void {
    this.statusservice.getdata('http://localhost:3000/machmodels').subscribe((res: Machstatusinterfacemodels) => {
    this.arraymachmodels = res.modelLogs;
    });
  }
  public imageselect(arraymachinestatus: Array<Machstatusinterfacelog>): string {
    let srcimage = '220_Manitou - ';
    this.arraymachinestatus.forEach(element => {
      element.
    });
    console.log(srcimage);
    return srcimage;
  }
}
