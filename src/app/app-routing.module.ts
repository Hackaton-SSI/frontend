import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationPageComponent } from './components/notification-page/notification-page.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'notifications', component: NotificationPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
