import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayEventsDashboardComponent } from './components/display-events-dashboard/display-events-dashboard.component';
import { LiveGamesComponent } from './components/live-games/live-games.component';
import { LiveUpdatesComponent } from './components/live-updates/live-updates.component';

const routes: Routes = [
  
      {
        path: '',
        redirectTo: 'liveUpdates',
        pathMatch: 'full'
      },
      {
        path: 'liveGames',
        component: LiveGamesComponent
      },
      {
        path: 'liveUpdates',
        component: LiveUpdatesComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
