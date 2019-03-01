import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[tab-host]'
})

/**
 * A marker that tells MainTabCompenent where in the html to attach a
 * component.
 */
export class MainTabsDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
