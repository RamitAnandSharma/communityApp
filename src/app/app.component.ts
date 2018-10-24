import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Plugins, NetworkStatus } from '@capacitor/core';
//http://akhromieiev.com/tutorials/network-detection-capacitor/
import { PageInterface } from './type/interface.entity';
import { AuthenticationService } from './services/authentication.service';

const { Network } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages: Array < PageInterface > = [
    { title: 'Login', url: '/login', icon: 'list' },
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Expected Guests', url: '/expectedGuest', icon: 'list' },
    { title: 'My Family', url: '/family', icon: 'list' },
    //
    //
    // { title: 'My Vehicles', url: '/vehicles', icon: 'list' },
    // { title: 'My Flats', url: '/flats', icon: 'list' },
    // { title: 'Notifications Settings', url: '/notifications', icon: 'list' },
    // { title: 'Add Users', url: '/addUser', icon: 'list' },
    // { title: 'Help', url: '/help', icon: 'list' },
    // { title: 'Feedback', url: '/feedback', icon: 'list' },
    //
    //
    //
    // { title: 'Settings', url: '/settings', icon: 'list' },
    // { title: 'Invite Visitors', url: '/inviteVisitors', icon: 'list' },
    // { title: 'My Daily Helps', url: '/myDailyHelps', icon: 'list' },
    // { title: 'Notify gate', url: '/notifyGate', icon: 'list' },
    // { title: 'Expected Guests', url: '/expectedGuest', icon: 'list' },
    // { title: 'Local Services', url: '/localService', icon: 'list' },
    // { title: 'My Apartment', url: '/myApartment', icon: 'list' }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.authenticationService.authenticationState.subscribe(state => {
        if (state) {
          //this.router.navigate(['members', 'home']);
          this.router.navigate(['register']);
        } else {
          //this.router.navigate(['login']);
          this.router.navigate(['register']);
        }
      });
    });
  }
  status: NetworkStatus;
  async getStatus() {
    try {
      this.status = await Network.getStatus();
    }
    catch (e) {
      console.log("Error", e)
    }
  }
}
