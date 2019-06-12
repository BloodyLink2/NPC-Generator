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
import { QuirksComponent } from './quirks/quirks.component';
import { TrinketsComponent } from './trinkets/trinkets.component';
import { OccupationsComponent } from './occupations/occupations.component';
import { AppearanceComponent } from './appearance/appearance.component';

@NgModule({
  declarations: [
    AppComponent,
    RacesComponent,
    AgeComponent,
    NameComponent,
    GenderComponent,
    OriginComponent,
    TraitsComponent,
    QuirksComponent,
    TrinketsComponent,
    OccupationsComponent,
    AppearanceComponent
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
