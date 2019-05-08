import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Constraints } from '../constraints';
import { AttributeData } from '../attribute-consist';

@Component({
  selector: 'app-attribute-list',
  templateUrl: './attribute-list.component.html',
  styleUrls: ['./attribute-list.component.css'],
})

/**
 * The component for the list of attributes with checkboxes.
 */
export class AttributeListComponent implements OnInit {
  
  /** The group of items in the list. */
  form: FormGroup;
  /** The current set of items. */
  set = [];
  /** Reference to the Constraints class. */
  constraints: Constraints = new Constraints();
  /**The attribute data for persistence. */
  attrData: AttributeData = AttributeData.getInstance();
  @Input('setID') setID: number;

  /**
   * Initializes the attribute list to counties.
   * @param formBuilder 
   */
  constructor(private formBuilder: FormBuilder) { 
    //this.setList(this.constraints.years, this.constraints.YEARS_CONST);
    //this.setList(this.constraints.counties, this.constraints.COUNTIES_CONST);
  }

  /**
   * Changes the list according to input from AttributeTabsComponents.
   * @param strNum 0,1,2 from selected attribute tab.
   */
  changeList(strNum: number) {
    console.log("strNum", strNum);
    if(strNum === this.constraints.YEARS_CONST) {
      this.setList(this.constraints.years, strNum);
    } else if(strNum === this.constraints.TYPES_CONST) {
      this.setList(this.constraints.types, strNum);
    } else {
      this.setList(this.constraints.counties, strNum);
    }
  }

  /**
   * Sets the list and updates the view.
   * @param set The new set.
   */
  setList(set, setNum) {
    this.set = set;
    this.setID = setNum;
    const controls = this.set.map(c => new FormControl(false));
    //console.log("HERE A");

    //Updates the view
    this.form = this.formBuilder.group({
      set: new FormArray(controls)
    });
    //console.log("HERE B");
  }

  /**
   * When a checkbox changes, sets the attribute persistence.
   * 
   * @param event The reference to the even.
   * @param id The id of the checkbox.
   */
  onCheckboxChange(event: any, id: number) {
    //console.log(this.setID + " : " + id + " : " + event.currentTarget.checked);
    this.attrData.setData(this.setID, id, event.currentTarget.checked);
  }  
 
  /**
   * Sets the initial list.
   */
  ngOnInit() {
    this.changeList(this.setID);
  }

}

