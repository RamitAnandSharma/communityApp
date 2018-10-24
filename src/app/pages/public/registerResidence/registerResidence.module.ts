import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterResidencePage } from './registerResidence.page';
//import { IonicSelectableModule } from 'ionic-selectable';
//import { IonicSelectableModule } from '../../../components/ionic-selectable/ionic-selectable.module';
import { IonicSelectableModule } from 'ionic-selectable';

const routes: Routes = [
  { path: '', component: RegisterResidencePage }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    IonicSelectableModule,
    RouterModule.forChild(routes) 
  ],
  //entryComponents: [SelectableComponent],
  declarations: [RegisterResidencePage]
})
export class RegisterResidencePageModule {}
