import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from './../../../services/data.service';
import { ToastController } from '@ionic/angular';
import { IonicSelectableComponent } from 'ionic-selectable';

import { City, Location, Residence } from './../../../type/interface.entity';


@Component({
  selector: 'app-registerResidence',
  templateUrl: 'registerResidence.page.html',
  styleUrls: ['registerResidence.page.scss']
})
export class RegisterResidencePage implements OnInit {
  cities: City[];
  city: City;
  locations: Location[];
  location: Location;
  residences: Residence[];
  residence: Residence;
  constructor(public formBuilder: FormBuilder, public dataService: DataService, public toastController: ToastController) {

  }


  ngOnInit() {
    this.geCities();
    this.buildCreateForm();
  }

  public registerForm: FormGroup;
  buildCreateForm() {
  this.registerForm = this.formBuilder.group({
        city: [null, Validators.required],
        location: [null, Validators.required],
        type: [null, Validators.required],
        houseId: [null, Validators.required],
        occupantType: [null, Validators.required],
      });
  }

  cityChange(event: { component: IonicSelectableComponent, value: any }) {
    console.log('port:', event.value);
    this.getLocations();
  }
  locationChange(event: { component: IonicSelectableComponent, value: any }) {
    console.log('port:', event.value);
  }

  async geCities() {
    await this.dataService.getCity()
      .subscribe(data => {
        console.log(data);
        this.cities = data.city;
        console.log(this.registerForm.controls)
      });
  }

  async getLocations() {
    await this.dataService.getCity()
      .subscribe(data => {
        console.log(data);
        this.locations = data.place;
      });
  }
}
