import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import { Message } from './dataservice.service';

@Injectable()
export class WebsocketService {

  private subject: Rx.Subject<Message>;

  constructor() { }

  public connect(url): Rx.Subject<Message> {
    if (!this.subject) {
      this.subject = this.create(url);
      console.log("Successfully connected: " + url);
    }
    return this.subject;
  }

  private create(url): Rx.Subject<Message> {
    let ws = new WebSocket(url);

    let observable = Rx.Observable.create(
      (obs: Rx.Observer<Message>) => {
        ws.onmessage = obs.next.bind(obs);
        ws.onerror = obs.error.bind(obs);
        ws.onclose = obs.complete.bind(obs);
        return ws.close.bind(ws);
      })
    let observer = {
      next: (data: Object) => {
        if (ws.readyState === WebSocket.OPEN) {
          console.log("Connection opened");
          ws.send(JSON.stringify(data));
        }
      }
    }
    return Rx.Subject.create(observer, observable);
  } 

}