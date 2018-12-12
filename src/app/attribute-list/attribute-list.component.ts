import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Constraints } from '../constraints';

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
  constraints = new Constraints();

  years = [
    {id: 1, name: '2010'},
    {id: 2, name: '2011'},
    {id: 3, name: '2012'},
    {id: 4, name: '2013'},
    {id: 5, name: '2014'}
  ];

  /**
   * Initializes the attribute list to counties.
   * @param formBuilder 
   */
  constructor(private formBuilder: FormBuilder) { 
    this.setList(this.constraints.counties);
  }

  /**
   * Changes the list according to input from AttributeTabsComponents.
   * @param strNum 0,1,2 from selected attribute tab.
   */
  changeList(strNum) {
    console.log("strNum", strNum);
    if(strNum === 1) {
      this.setList(this.constraints.years);
    } else if(strNum === 2) {
      this.setList(this.constraints.types);
    } else {
      this.setList(this.constraints.counties);
    }
  }

  /**
   * Sets the list and updates the view.
   * @param set The new set.
   */
  setList(set) {
    this.set = set;
    const controls = this.set.map(c => new FormControl(false));
    
    //Updates the view
    this.form = this.formBuilder.group({
      set: new FormArray(controls)
    });
  }

  ngOnInit() {}

}
