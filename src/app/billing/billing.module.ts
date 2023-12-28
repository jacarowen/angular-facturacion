import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";


import { CharacteractivityComponent } from './components/characteractivity/characteractivity.component';
import { EconomicActivityComponent } from "./components/economic-activity/economic-activity.component";
import { MainPageComponent } from "./pages/main-page-component";


@NgModule({
    declarations:[
      MainPageComponent,
      CharacteractivityComponent,
      EconomicActivityComponent
   ],
    exports:[
      MainPageComponent
          ],
    imports:[
      CommonModule,
      FormsModule
    ]
})
export class BillingModule{

}