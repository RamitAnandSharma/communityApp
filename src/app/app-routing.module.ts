import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './services/auth-guard.service';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/public/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/public/registerResidence/registerResidence.module#RegisterResidencePageModule' },
  { path: 'members', loadChildren: './pages/members/members-routing.module#MemberRoutingModule' },
  { path: '**', redirectTo: 'login', pathMatch: 'full'},
  // { path: 'members', canActivate: [AuthGuardService], loadChildren: './pages/members/guests/guest.module#GuestPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
