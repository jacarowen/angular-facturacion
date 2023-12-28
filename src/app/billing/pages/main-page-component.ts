import { Component } from '@angular/core';
import { ActivityEco } from '../interfaces/activityeco.interfaces';
import { BillingService } from '../services/billing.services';

@Component({
    selector: 'app-billing-main-page',
    templateUrl: './main-page-component.html'
})

export class MainPageComponent {
    
  constructor(private billingService: BillingService){} 

  get activitys(): ActivityEco[]{
    return [...this.billingService.activitys];
  }

  onDeleteActivitys( id: string ):void {
    this.billingService.deleteCharacterById( id );
  }

  onNewCharacter( activity: ActivityEco): void {
    this.billingService.addCharacter(activity);
  }
}