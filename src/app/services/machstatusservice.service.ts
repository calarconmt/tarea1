import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MachstatusserviceService {

  constructor(private http: HttpClient) { }

  public getdata(url: string): Observable<any> {
    return this.http.get(url);
  }

  public getAllMachineStatus(params: any): Observable<any> {
    const url = `http://10.29.1.8:8085`;
    const endpoint = `api/machine/getstatuslogspercentage`;
    return this.http.get(`${url}/${endpoint}`, {params});
  }

  public updateStatusToMachine(params: any): Observable<any> {
    const url = `http://10.29.1.8:8085`;
    const endpoint = `api/machine/getstatuslogspercentage`;
    return this.http.post(`${url}/${endpoint}`, params);
  }
}
