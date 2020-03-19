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
}
