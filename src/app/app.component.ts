import { Component } from '@angular/core';
import { WebsocketService } from './websocket.service';
import * as Rx from 'rxjs/Rx';
import { DataserviceService } from './dataservice.service';
import { Message } from './dataservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'application';
  message;
  message1='This is a message from client';

  constructor(private service: DataserviceService) {

    service.messages.subscribe(msg => {			
      console.log("Response from websocket: ", msg);
      this.message=msg.data;
		});

   };

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //this.connect();
  }

  sendMsg() {
    console.log('new message from client to websocket: ', this.message1);
		this.service.messages.next({data: this.message1});
		//this.message.message = '';
  }


  
}
