import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WebsocketService } from './websocket.service';
import { DataserviceService } from './dataservice.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [WebsocketService,DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
