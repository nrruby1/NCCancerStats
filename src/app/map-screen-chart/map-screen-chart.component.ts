import { Component, OnInit, Inject } from '@angular/core';
import * as CanvasJS from 'canvasjs/dist/canvasjs.min';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { GraphDialogComponent } from '../graph-dialog/graph-dialog.component';
import { CountiesService } from '../counties.service';
import { AttributeData } from '../attribute-consist'
import { Constraints } from '../constraints';

/**
 * Structure for the cancer data.
 */
export interface cancerData {
  county: String;
  cases: number;
  case_rate: number;
  deaths: number;
  death_rates: number;
}

/**
 * Displays and updates the table and produces a dialog for graph.
 */
@Component({
  selector: 'app-map-screen-chart',
  templateUrl: './map-screen-chart.component.html',
  styleUrls: ['./map-screen-chart.component.css']
})
export class MapScreenChartComponent implements OnInit {
  
  /**The data being displayed.*/
  data: cancerData[];
  /**The data from the 2010 cancer collection.*/
  cancer2010: cancerData[];
  /**The data from the 2011 cancer collection.*/
  cancer2011: cancerData[];
  /**The data from the 2012 cancer collection.*/
  cancer2012: cancerData[];
  /**The data from the 2013 cancer collection.*/
  cancer2013: cancerData[];
  /**The data from the 2014 cancer collection.*/
  cancer2014: cancerData[];
  /**The heading of the columns.*/
  columnHeads: string[] = ["county", "cases", "case_rate", "deaths", "death_rates"];
  /**The attribute data for persistence. */
  attributeData: AttributeData;
  /** Reference to the Constraints class. */
  constraints = new Constraints();

  /**
   * @param dialog Reference to the dialog.
   * @param cs Reference to the countyService.
   */
  constructor(public dialog: MatDialog, private cs: CountiesService) { }

  /**
   * Starts up the dialog box.
   */
  openDialog(): void {
    const dialogRef = this.dialog.open(GraphDialogComponent, {data: this.data})
  }

  /**
   * Checks what data to display, organizes it, updates the table
   */
  updateTable() {
    let countiesData: boolean[] = this.attributeData.getData(this.constraints.COUNTIES_CONST);
    let yearsData: boolean[] = this.attributeData.getData(this.constraints.YEARS_CONST);
    let typeData: boolean[] = this.attributeData.getData(this.constraints.TYPES_CONST);

    let typeOffset: number = typeData[0] ? 0 : 1; //offset for query doc number
    let dataList;

    //Select the type of data
    if(typeOffset == 0) 
      dataList = [] as cancerData[][];
    //else
      //dataList = [] as popData[][];

    //Check the number of years and places their indicies in an array
    let count: number = 0;
    let yearsArr: number[] = new Array();
    for(var i = 0; i < yearsData.length; i++) {
      if(yearsData[i]) {
        count++;
        yearsArr.push(i);
      }
    }
    
    //Checks if counties is empty.
    let emptyCounties: boolean = true;
    for(var i = 0; i < countiesData.length; i++) {
      if(countiesData[i]) 
        emptyCounties = false;
    }

    //Checks the number of years.
    if(count == 0) {
      return;
    } else if(count == 1) {
      dataList[0] = this.queryCancerDocument(yearsArr[0]); 
    } else {
      this.getDataDocuments(yearsArr, dataList, typeOffset);
    }

    //Select type of data
    let newData;
    if(typeOffset == 0) 
      newData = new Array() as cancerData[];
    //else
      //newData = new Array() as popData[];

    //Pushes the objects onto the array to store
    for(var i = 0; i < dataList[0].length-1; i++) {
      for(var j = 0; j < dataList.length; j++) {
        if(countiesData[i] || emptyCounties)
          newData.push(this.findCounty(dataList[j], this.constraints.counties[i].name));
      }
    }

    this.data = newData;
  }

  /**
   * Finds the county by name and returns the object.
   * 
   * @param dataList The list of data objects.
   * @param c The name of the county.
   */
  findCounty(dataList: cancerData[], c: string) {
    let regex = new RegExp('^[0-9:]* *' + c);
    for(var i = 0; i < dataList.length; i++) {
      if(regex.test(dataList[i].county.toString())) {
        return dataList[i];
      }
    }
  }

  /**
   * Add years to the county names and builds the data array.
   * 
   * @param yearsArr The years to display.
   * @param dataList The list of data.
   * @param type The type of data.
   */
  getDataDocuments(yearsArr: number[], dataList, type: number) {
    for(var i = 0; i < yearsArr.length; i++) {
      let currList;
      if(type == 0)
        currList = this.queryCancerDocument(yearsArr[i]);

      for(var j = 0; j < currList.length; j++) {
        currList[j].county = this.constraints.years[yearsArr[i]].name + ": " + currList[j].county;
      }
      
      dataList.push(currList);
    }
  }

  /**
   * Copies and returns the specified data.
   * 
   * @param index The index of the data.
   */
  queryCancerDocument(index: number) {
    let tempData: cancerData[];
    switch(index) {
      case 0: tempData = this.cancer2010;
        break;
      case 1: tempData = this.cancer2011;
        break;
      case 2: tempData = this.cancer2012;
        break;
      case 3: tempData = this.cancer2013;
        break;
      case 4: tempData = this.cancer2014;
        break;
    }
    return tempData.map(obj => ({...obj}));//Clones
  }

  /**
   * Gets all of the query data.
   */
  ngOnInit() { 
    this.attributeData = AttributeData.getInstance();
    //this.cs.getCountyCancer(1).subscribe((cData: cancerData[]) => {this.data=cData});
    this.cs.getCountyCancer(0).subscribe((cData: cancerData[]) => {this.cancer2010=cData});
    this.cs.getCountyCancer(1).subscribe((cData: cancerData[]) => {this.cancer2011=cData});
    this.cs.getCountyCancer(2).subscribe((cData: cancerData[]) => {this.cancer2012=cData});
    this.cs.getCountyCancer(3).subscribe((cData: cancerData[]) => {this.cancer2013=cData});
    this.cs.getCountyCancer(4).subscribe((cData: cancerData[]) => {this.cancer2014=cData});
   }

}
