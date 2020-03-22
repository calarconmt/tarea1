import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MachineComponent } from './machines/machine/machine.component';
import { MachstatusComponent } from './machines/machstatus/machstatus.component';


@NgModule({
  declarations: [
    AppComponent,
    MachineComponent,
    MachstatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
