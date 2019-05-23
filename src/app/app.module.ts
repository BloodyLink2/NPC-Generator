import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RacesComponent } from './races/races.component';
import { AgeComponent } from './age/age.component';
import { NameComponent } from './name/name.component';
import { GenderComponent } from './gender/gender.component';
import { OriginComponent } from './origin/origin.component';

@NgModule({
  declarations: [
    AppComponent,
    RacesComponent,
    AgeComponent,
    NameComponent,
    GenderComponent,
    OriginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
