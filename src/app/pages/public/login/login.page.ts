import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from './../../../services/data.service';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from './../../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage implements OnInit {

  constructor(public formBuilder: FormBuilder, public dataService: DataService,
    public toastController: ToastController, private authService: AuthenticationService) {

  }

  public loginForm: FormGroup;
  ngOnInit() {
    this.buildCreateForm();
  }

  buildCreateForm() {
    this.loginForm = this.formBuilder.group({
      username: ['s', Validators.required],
      password: ['s', Validators.required]
    });
  }

  login() {
    this.authService.login();
  }
  login1() {
    //authenticateUser
    //  this.dataService.login(value.username, value.password).subscribe(x => {

    //  });
    //
    this.presentToast();
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Username or Password is invalid.',
      duration: 15000,
      cssClass: 'toast-danger',
    });
    toast.present();
  }
}
