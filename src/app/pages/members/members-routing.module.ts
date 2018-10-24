import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './../../services/auth-guard.service';
const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'expectedGuest', canActivate: [AuthGuardService], loadChildren: './guests/guest.module#GuestPageModule' },
  { path: 'settings', loadChildren: '../underConstruction/underConstruction.module#UnderConstructionPageModule' },

  { path: 'inviteVisitors', loadChildren: '../underConstruction/underConstruction.module#UnderConstructionPageModule' },
  { path: 'myDailyHelps', loadChildren: '../underConstruction/underConstruction.module#UnderConstructionPageModule' },
  { path: 'notifyGate', loadChildren: '../underConstruction/underConstruction.module#UnderConstructionPageModule' },
  { path: 'localService', loadChildren: '../underConstruction/underConstruction.module#UnderConstructionPageModule' },
  { path: 'myApartment', loadChildren: '../underConstruction/underConstruction.module#UnderConstructionPageModule' },
  { path: 'family', loadChildren: '../underConstruction/underConstruction.module#UnderConstructionPageModule' },
  { path: 'vehicles', loadChildren: '../underConstruction/underConstruction.module#UnderConstructionPageModule' },
  { path: 'flats', loadChildren: '../underConstruction/underConstruction.module#UnderConstructionPageModule' },
  { path: 'notifications', loadChildren: '../underConstruction/underConstruction.module#UnderConstructionPageModule' },
  { path: 'addUser', loadChildren: '../underConstruction/underConstruction.module#UnderConstructionPageModule' },
  { path: 'help', loadChildren: '../underConstruction/underConstruction.module#UnderConstructionPageModule' },
  { path: 'feedback', loadChildren: '../underConstruction/underConstruction.module#UnderConstructionPageModule' },
  { path: '*', loadChildren: '../underConstruction/underConstruction.module#UnderConstructionPageModule' }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
