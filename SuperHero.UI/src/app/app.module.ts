import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SuperHeroComponent } from './super-hero/super-hero.component';
import { EditHeroComponent } from './edit-hero/edit-hero.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    SuperHeroComponent,
    EditHeroComponent,
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule,
    FormsModule,
  ],
  exports: [
    AppComponent,
    SuperHeroComponent,
    EditHeroComponent,
  ],
  providers: [HttpClientModule, HttpClient],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
    //NO_ERRORS_SCHEMA,
  ],
  bootstrap: [AppComponent, EditHeroComponent, SuperHeroComponent]
})
export class AppModule { }

