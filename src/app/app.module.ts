import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestGameComponent } from './guestGame/guest.component';

@NgModule({
  declarations: [AppComponent, GuestGameComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
