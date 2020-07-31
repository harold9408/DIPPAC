import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CountdownModule } from 'ngx-countdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraRobotComponent } from './barra-robot/barra-robot.component';
import { BarraMenuComponent } from './barra-menu/barra-menu.component';
import { RFN004Component } from './rfn004/rfn004.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraRobotComponent,
    BarraMenuComponent,
    RFN004Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountdownModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
