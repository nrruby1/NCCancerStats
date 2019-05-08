import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material';
import { AttributeData } from '../attribute-consist';
import { Constraints } from '../constraints';

@Component({
  selector: 'app-map-screen',
  templateUrl: './map-screen.component.html',
  styleUrls: ['./map-screen.component.css']
})

/** 
 * Component for the map screen.
 * 
 * **Just a container.
 */
export class MapScreenComponent implements OnInit {

  /**The attribute data for persistence. */
  attributeData: AttributeData = AttributeData.getInstance();
  /** Reference to the Constraints class. */
  constraints: Constraints = new Constraints();

  constructor() { }

  ngOnInit() {
  }

  /**If the types radio button changes, update persistence.*/
  radioChange(event: MatRadioChange) {
    if(event.value == "0") {
      this.attributeData.setData(this.constraints.TYPES_CONST, 0, true);
      this.attributeData.setData(this.constraints.TYPES_CONST, 1, false);
    } else {
      this.attributeData.setData(this.constraints.TYPES_CONST, 0, false);
      this.attributeData.setData(this.constraints.TYPES_CONST, 1, true);
    }
  }

}
