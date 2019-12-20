import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AttractionComponent } from './attraction/attraction.component';
import { OrganiserComponent } from './organiser/organiser.component';
import { AttractionEditorComponent } from './attraction-editor/attraction-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    AttractionComponent,
    OrganiserComponent,
    AttractionEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
