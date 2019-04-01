import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { Constraints } from '../constraints';

@Component({
  selector: 'app-attribute-tabs',
  templateUrl: './attribute-tabs.component.html',
  styleUrls: ['./attribute-tabs.component.css']
})

/**
 * The component for the attribute tabs.
 */
export class AttributeTabsComponent implements OnInit {

  /** The emitter for when the tab is changed. */
  @Output() changeEvent = new EventEmitter<number>();
  /** Reference to Constraints. */
  constraints = new Constraints();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Called when a tab selection changes and emits an event.
   * @param event Reference to what tab is selected.
   */
  tabSelectionChanged(event: MatTabChangeEvent) {
    this.changeEvent.emit(event.index);
  }

}
