import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import * as Rx from 'rxjs/Rx';

export interface Message {
	data: string
}

const SERVICE_URL = 'ws://localhost:8080/my-websocket-endpoint';

@Injectable()
export class DataserviceService {

  messages:Rx.Subject<Message>;

  constructor(private service:WebsocketService) { 

    this.messages = <Rx.Subject<Message>>service
			.connect(SERVICE_URL)
			.map((response: Message): Message => {
        console.log("data>>"+response.data);
        let data = JSON.parse(response.data);
        //let data = response.data;
				return {
					data: data
				}
			});
  }

  
}
