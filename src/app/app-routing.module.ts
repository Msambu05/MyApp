import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard'; // Ensure the AuthGuard is imported
import { ProfileComponent } from './profile/profile.component'; // Ensure Profile Component is imported
import { SettingsComponent } from './settings/settings.component'; // Example
import { TermsComponent } from './terms/terms.component'; // Example
import { ContactComponent } from './contact/contact.component'; // Example
import { AboutComponent } from './about/about.component'; // Example
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RewardsComponent } from './rewards/rewards.component';
import { EventsComponent } from './events/events.component';
import { ReportWasteComponent } from './report-waste/report-waste.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },

  // for homeMenu
  { path: 'settings', component: SettingsComponent /*, canActivate: [AuthGuard]*/ },
  { path: 'terms', component: TermsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'password-reset', component: PasswordResetComponent },

  //for dashboard
  { path: 'dashboard', component: DashboardComponent },
  { path: 'rewards', component: RewardsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'report-waste', component: ReportWasteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}