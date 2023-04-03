import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-live-updates',
  templateUrl: './live-updates.component.html',
  styleUrls: ['./live-updates.component.scss']
})
export class LiveUpdatesComponent {
  public liveUpdatesData: any = [];
  public subscription:any;
  constructor(private appService: AppService) {}
  ngOnInit() {
    this.subscription = this.appService.shareLiveUpdateData.subscribe((data: any) => {
      this.liveUpdatesData=data.reverse();
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  getgoalTimeInMinutes(startTime: any, timeStamp: any) {
    let tempTimeStamp:any = new Date(timeStamp);
    let tempStartTime:any =new Date(startTime);
    return Math.abs(Math.floor((tempTimeStamp - tempStartTime)/60e3));
  }
}
