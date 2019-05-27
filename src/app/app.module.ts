import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RacesComponent } from './races/races.component';
import { AgeComponent } from './age/age.component';
import { NameComponent } from './name/name.component';
import { GenderComponent } from './gender/gender.component';
import { OriginComponent } from './origin/origin.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TraitsComponent } from './traits/traits.component';

@NgModule({
  declarations: [
    AppComponent,
    RacesComponent,
    AgeComponent,
    NameComponent,
    GenderComponent,
    OriginComponent,
    TraitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
