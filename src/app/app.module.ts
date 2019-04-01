import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapBoxComponent } from './map-box/map-box.component';
import { MainTabsComponent } from './main-tabs/main-tabs.component';
import { MapScreenComponent } from './map-screen/map-screen.component';
import { StatsScreenComponent } from './stats-screen/stats-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainTabsDirective } from './main-tabs.directive';
import { AttributeTabsComponent } from './attribute-tabs/attribute-tabs.component';
import { AttributeListComponent } from './attribute-list/attribute-list.component';
import { MapScreenSubComponent } from './map-screen-sub/map-screen-sub.component';
import { MapScreenChartComponent } from './map-screen-chart/map-screen-chart.component';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import { MapScreenSub2Component } from './map-screen-sub2/map-screen-sub2.component';

@NgModule({
  declarations: [
    AppComponent,
    MapBoxComponent,
    MainTabsComponent,
    MapScreenComponent,
    StatsScreenComponent,
    MainTabsDirective,
    AttributeTabsComponent,
    AttributeListComponent,
    MapScreenSubComponent,
    MapScreenChartComponent,
    DemoComponentComponent,
    MapScreenSub2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatRadioModule,
    MatTableModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ScrollingModule
  ],
  exports: [
    MatTabsModule
  ],
  providers: [],
  entryComponents: [MapScreenComponent, StatsScreenComponent, DemoComponentComponent],
  bootstrap: [AppComponent],
})

/**
 * The main module for the application. Contains declarations of Components 
 * and Directives. Also contains imported modules for use throughout the application.
 */
export class AppModule { }
