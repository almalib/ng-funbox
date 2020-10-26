import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgFunboxCardsWrapperComponent } from './ng-funbox-cards-wrapper/ng-funbox-cards-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    NgFunboxCardsWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule { }
