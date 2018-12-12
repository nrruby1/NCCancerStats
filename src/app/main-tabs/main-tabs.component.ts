import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { MainTabsDirective } from '../main-tabs.directive';
import { MapScreenComponent } from '../map-screen/map-screen.component';

@Component({
  selector: 'app-main-tabs',
  templateUrl: './main-tabs.component.html',
  styleUrls: ['./main-tabs.component.css']
})

/**
 * The component for the main tabs.
 */
export class MainTabsComponent implements OnInit {

  /** Reference to the marker to place the component. */
  @ViewChild(MainTabsDirective) tabHost;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  /**
   * Initializes the tab selection.
   */
  ngOnInit() { 
    this.tabSelectionChanged(null);
   }

   /**
    * When a tab selection changes, update the component.
    * @param event Reference to the selected tab.
    */
  tabSelectionChanged(event: MatTabChangeEvent){
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(MapScreenComponent);
    let viewContainerRef = this.tabHost.viewContainerRef;
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory);    
  }

}
