import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StarWarsService } from './starwars.service';

// Angular Material
import { AllMaterialModule } from "./material-module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AllMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    StarWarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
