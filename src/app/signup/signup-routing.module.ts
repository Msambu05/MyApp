import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import the standalone component
import { SignupPage } from './signup.page';

const routes: Routes = [
  {
    path: '',
    component: SignupPage,  // Use the standalone component directly
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // Import routing configuration
  exports: [RouterModule],
})
export class SignupPageRoutingModule {}
