import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AttractionComponent } from './attraction/attraction.component';
import { OrganiserComponent } from './organiser/organiser.component';
import { AttractionEditorComponent } from './attraction-editor/attraction-editor.component';
import { EventComponent } from './event/event.component';
import { TicketComponent } from './ticket/ticket.component';
import { VisitorComponent } from './visitor/visitor.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FlashComponent } from './home/flash.component';

@NgModule({
  declarations: [
    AppComponent,
    AttractionComponent,
    OrganiserComponent,
    AttractionEditorComponent,
    EventComponent,
    TicketComponent,
    VisitorComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FlashComponent
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
