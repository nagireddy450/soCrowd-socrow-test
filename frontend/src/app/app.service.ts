import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IHelloMessage } from './interfaces/iHelloMessage';
import { ISocketMessage } from './interfaces/iSocketMessage';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private apiUrl: string = 'http://localhost:3007/';
  // private subject: AnonymousSubject<MessageEvent>;
  // public messages: Subject<ISocketMessage>;
  liveGamesData: any = [];
  liveUpdatesData: any = [];
  public liveGamescontent = new BehaviorSubject<any>([]);
  public shareLiveData = this.liveGamescontent.asObservable();
  public liveUpdateContent = new BehaviorSubject<any>([]);
  public shareLiveUpdateData = this.liveUpdateContent.asObservable();

  constructor(private httpClient: HttpClient, private socket: Socket) {}

  public getHelloMessage(): Observable<IHelloMessage> {
    return <Observable<IHelloMessage>>this.httpClient.get(this.apiUrl);
  }
  setLiveGamesData(data: any) {
    this.liveGamescontent.next(data);
  }
  setLiveUpdatesData(data: any) {
    this.liveUpdateContent.next(data);
  }
  public onLiveScoreEvent(): Observable<any> {
    return this.socket.fromEvent('scoreRoom');
  }
}
