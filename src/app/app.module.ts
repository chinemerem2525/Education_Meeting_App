import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/resueableComponents/footer/footer/footer.component';
import { HeaderComponent } from './shared/resueableComponents/header/header/header.component';
import { HomeComponent } from './pages/home/home/home.component';
import { MeetingComponent } from './pages/meeting/meeting/meeting.component';
import { MeetingDetailsComponent } from './pages/meetingDetails/meeting-details/meeting-details.component';
import { SliderComponent } from './shared/resueableComponents/header/slider/slider.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CustomSoftwareDevelopmentComponent } from './pages/services/softwareDevelopment/customSoftwareDevelopment/custom-software-development/custom-software-development.component';
import { MobileAppDevelopmentComponent } from './pages/services/softwareDevelopment/mobileAppDevelopment/mobile-app-development/mobile-app-development.component';
import { WebDevelopmentComponent } from './pages/services/softwareDevelopment/webDevelopment/web-development/web-development.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MeetingComponent,
    MeetingDetailsComponent,
    SliderComponent,
    ContactComponent,
    CustomSoftwareDevelopmentComponent,
    MobileAppDevelopmentComponent,
    WebDevelopmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
