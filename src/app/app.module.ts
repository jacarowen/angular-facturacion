import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BillingModule } from './billing/billing.module';
import { CounterModule } from './counter/counter.module';
import { DbzModule } from './dbz/dbz.module';
import { HeroModule } from './heroes/hero.modules';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
],
  imports: [
    BrowserModule,
    CounterModule,
    HeroModule,
    DbzModule,
    BillingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
