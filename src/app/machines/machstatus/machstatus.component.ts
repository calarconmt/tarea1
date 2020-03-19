import { Component, OnInit } from '@angular/core';
import { MachstatusserviceService } from 'src/app/services/machstatusservice.service';
import { Machstatusinterface, Machstatusinterfacelog } from 'src/app/interfaces/machstatusinterface';

@Component({
  selector: 'app-machstatus',
  templateUrl: './machstatus.component.html',
  styleUrls: ['./machstatus.component.css']
})
export class MachstatusComponent {
  public arraymachinestatus: Array<Machstatusinterfacelog>;
  public statusidlist: number[];
  public statusnamelist: string[];
  public colorlist: string[];
  public percentagelist: number[];

  constructor(public statusservice: MachstatusserviceService) {
    this.statusidlist = [];
    this.statusnamelist = [];
    this.colorlist = [];
    this.percentagelist = [];
  }

  public getstatuslog(): void {
    this.statusservice.getdata('http://localhost:3000/data').subscribe((res: Machstatusinterface) => {
    this.arraymachinestatus = res.statusLog;
    //   this.statusservice = JSON.parse(res.data.toString());
    //   this.arraymachinestatus.forEach(element => {
    //     this.statusidlist.push(element.statusId);
    //   });
    console.log(this.arraymachinestatus);
    });
  }
}

