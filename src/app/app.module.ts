import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CoreModule } from './core/core.module';

import { RouteRoutingModule } from './route/route-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './frame/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HomeComponent } from './features/home/home.component';
import { AccordionPanelComponent } from './shared/accordion-panel/accordion-panel.component';
import { InformationComponent } from './frame/information/information.component';
import { RecaptchaModule } from 'ng-recaptcha';


import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';





@NgModule({
  declarations: [
    AppComponent
    ,MenuComponent
,HomeComponent
    , InformationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    CoreModule,
    RouteRoutingModule,
    RecaptchaModule.forRoot(),
    VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
