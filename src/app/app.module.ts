import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

// Firebase imports
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';

// Environment configuration
import { environment } from '../environments/environment';

//Menu imports
import { ProfileComponent } from './profile/profile.component'; // Import ProfileComponent
import { SettingsComponent } from './settings/settings.component'; // Import SettingsComponent
import { TermsComponent } from './terms/terms.component'; // Import TermsComponent
import { ContactComponent } from './contact/contact.component'; // Import ContactComponent
import { AboutComponent } from './about/about.component'; // Import AboutComponent
import { PasswordResetComponent } from './password-reset/password-reset.component'; // Import PasswordResetComponent

// Dashboard imports
import { DashboardComponent } from './dashboard/dashboard.component';
import { RewardsComponent } from './rewards/rewards.component';
import { EventsComponent } from './events/events.component';
import { ReportWasteComponent } from './report-waste/report-waste.component';

@NgModule({
  declarations: [AppComponent, ProfileComponent, 
    SettingsComponent, TermsComponent, 
    ContactComponent, AboutComponent, 
    PasswordResetComponent, DashboardComponent,
    RewardsComponent, EventsComponent,
    ReportWasteComponent,],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // Add Firebase providers here
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase())
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
