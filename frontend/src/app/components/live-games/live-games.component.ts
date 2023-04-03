import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-live-games',
  templateUrl: './live-games.component.html',
  styleUrls: ['./live-games.component.scss'],
})
export class LiveGamesComponent {
  public liveGamesData: any = [];
  public currentTime: any = new Date();
  constructor(private appService: AppService) {}
  ngOnInit() {
    this.appService.shareLiveData.subscribe((data: any) => {
      if (data.length) {
        this.liveGamesData = data;
      }
      this.liveGamesData.map((item: any) => {
        this.currentTime = new Date();
        item.startTime=new Date(item.startTime);
        item.endTime=new Date(item.endTime);
        if (item.startTime > this.currentTime) {
          item.type = 'About to start';
          item.timeDuration= Math.floor((item.startTime - this.currentTime)/60e3);
        } else if (
          item.startTime < this.currentTime &&
          this.currentTime < item.endTime
        ) {
          item.type = 'In game';
          item.timeDuration= Math.floor((item.endTime - this.currentTime)/60e3);
        } else {
          item.type = 'Ended';
          item.timeDuration= Math.floor((this.currentTime - item.endTime)/60e3);
        }
        return item;
      });
    });
  }
}


