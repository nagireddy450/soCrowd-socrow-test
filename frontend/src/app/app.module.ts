import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule} from "@angular/common/http";
import { DisplayEventsDashboardComponent } from './components/display-events-dashboard/display-events-dashboard.component';
import { LiveUpdatesComponent } from './components/live-updates/live-updates.component';
import { LiveGamesComponent } from './components/live-games/live-games.component';
import { SocketIoModule,SocketIoConfig } from 'ngx-socket-io';
import { SortByGameStatusPipe } from './pipes/sort-by-game-status.pipe';
import { GroupByStatusPipe } from './pipes/group-by-status.pipe';

const config: SocketIoConfig={url:"ws://localhost:3008",options:{transports:['websocket']}}

@NgModule({
  declarations: [
    AppComponent,
    DisplayEventsDashboardComponent,
    LiveUpdatesComponent,
    LiveGamesComponent,
    SortByGameStatusPipe,
    GroupByStatusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
