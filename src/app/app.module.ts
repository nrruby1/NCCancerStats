import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayService } from './display.service';
import { MapBoxComponent } from './map-box/map-box.component';
import { MainTabsComponent } from './main-tabs/main-tabs.component';
import { MapScreenComponent } from './map-screen/map-screen.component';
import { StatsScreenComponent } from './stats-screen/stats-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainTabsDirective } from './main-tabs.directive';
import { AttributeTabsComponent } from './attribute-tabs/attribute-tabs.component';
import { AttributeListComponent } from './attribute-list/attribute-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MapBoxComponent,
    MainTabsComponent,
    MapScreenComponent,
    StatsScreenComponent,
    MainTabsDirective,
    AttributeTabsComponent,
    AttributeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ScrollingModule
  ],
  exports: [
    MatTabsModule
  ],
  providers: [ DisplayService ],
  entryComponents: [MapScreenComponent],
  bootstrap: [AppComponent],
})

/**
 * The main module for the application. Contains declarations of Components 
 * and Directives. Also contains imported modules for use throughout the application.
 */
export class AppModule { }
