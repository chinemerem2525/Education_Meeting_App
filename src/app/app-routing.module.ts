import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { MeetingComponent } from './pages/meeting/meeting/meeting.component';
import { MeetingDetailsComponent } from './pages/meetingDetails/meeting-details/meeting-details.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WebDevelopmentComponent } from './pages/services/softwareDevelopment/webDevelopment/web-development/web-development.component';
import { CustomSoftwareDevelopmentComponent } from './pages/services/softwareDevelopment/customSoftwareDevelopment/custom-software-development/custom-software-development.component';
import { MobileAppDevelopmentComponent } from './pages/services/softwareDevelopment/mobileAppDevelopment/mobile-app-development/mobile-app-development.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'meeting', component: MeetingComponent},
  {path: 'about', component: MeetingDetailsComponent},
  {path: 'contact', component: ContactComponent},

  // Services Routes
  {path: 'services/web-development', component: WebDevelopmentComponent},
  {path: 'services/custom-software', component: CustomSoftwareDevelopmentComponent},
  {path: 'services/mobile-app', component: MobileAppDevelopmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
