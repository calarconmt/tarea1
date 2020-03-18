import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MachstatusComponent } from './machines/machstatus/machstatus.component';
import { BrowserModule } from '@angular/platform-browser';


const routes: Routes = [
  {
  path: 'machstatus',
  component: MachstatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  BrowserModule, HttpClientModule , RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
