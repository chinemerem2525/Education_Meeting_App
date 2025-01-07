import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/resueableComponents/footer/footer/footer.component';
import { HeaderComponent } from './shared/resueableComponents/header/header/header.component';
import { HomeComponent } from './pages/home/home/home.component';
import { MeetingComponent } from './pages/meeting/meeting/meeting.component';
import { MeetingDetailsComponent } from './pages/meetingDetails/meeting-details/meeting-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MeetingComponent,
    MeetingDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
