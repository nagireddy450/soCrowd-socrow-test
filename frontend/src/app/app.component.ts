import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { ISocketMessage } from './interfaces/iSocketMessage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title: string = 'frontend';
  public helloMessage: string = '';
  public liveGamesData: Array<[]> = [];
  public liveUpdatesData: Array<[]> = [];
  content = '';
  public receivedMessages: Array<ISocketMessage> = []; //messages received from websockets

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getHelloMessage().subscribe((payload) => {
      this.helloMessage = payload.message;
    });
    this.appService.onLiveScoreEvent().subscribe((data: any) => {
      if (data.length) {
        this.liveGamesData = data;
        this.getLiveGamesData(this.liveGamesData);
      } else {
        this.liveUpdatesData.push(data);
        this.getLiveUpdatesData(this.liveUpdatesData);
      }
    });
  }
  getLiveGamesData(data: any) {
    this.appService.setLiveGamesData(data);
  }
  getLiveUpdatesData(data: any) {
    this.appService.setLiveUpdatesData(data);
  }
  ngOnDestroy(){
    this.liveUpdatesData=[];
  }
}
