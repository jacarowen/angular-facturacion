import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';
import { HeroModule } from './heroes/hero.modules';

import { AppComponent } from './app.component';
import { EconomicactivityComponent } from './billing/economicactivity/economicactivity.component';
import { CustomerComponent } from './billing/customer/customer.component';
import { BillsComponent } from './billing/bills/bills.component';
import { ProductComponent } from './billing/product/product.component';
import { SucursalComponent } from './billing/sucursal/sucursal.component';
import { ValorComponent } from './billing/valor/valor.component';



@NgModule({
  declarations: [
    AppComponent,
    EconomicactivityComponent,
    CustomerComponent,
    BillsComponent,
    ProductComponent,
    SucursalComponent,
    ValorComponent
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
