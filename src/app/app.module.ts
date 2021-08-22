import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntityCardComponent } from './components/entity-card/entity-card.component';
import { NotificationPageComponent } from './components/notification-page/notification-page.component';
import { MapComponent } from './components/map/map.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { ModalFullscreenComponent } from './components/modal-fullscreen/modal-fullscreen.component';

@NgModule({
  declarations: [AppComponent, EntityCardComponent, NotificationPageComponent, MapComponent, SidebarComponent, HomeComponent, ModalFullscreenComponent],
  imports: [
    MatIconModule,
    BrowserModule,
    MatCardModule,
    MatInputModule,
    AppRoutingModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
