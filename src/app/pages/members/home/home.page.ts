import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverPage } from './popover.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  conferenceDate = '2047-05-17';

    constructor(public popoverCtrl: PopoverController) { }

    async presentPopover(event: Event) {
      const popover = await this.popoverCtrl.create({
        component: PopoverPage,
        event
      });
      await popover.present();
    }
}
