import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material';
import { CountiesService } from '../counties.service';
import { AttributeData } from '../attribute-consist';
import { Constraints } from '../constraints';

export interface cancerData {
  county: String;
  cases: number;
  case_rate: number;
  deaths: number;
  death_rate: number;
}

export interface popData {
  county: String;
  from_0_to_19: number;
}

const EXAMPLE_DATA: cancerData[] = [
  {county: "Buncombe", cases: 1536, case_rate: 460.8, deaths: 551, death_rate: 160.5},
  {county: "Cherokee", cases: 207, case_rate: 438.2, deaths: 85, death_rate: 168.0},
  {county: "Clay", cases: 57, case_rate: 317.1, deaths: 28, death_rate: 135.4},
  {county: "Graham", cases: 59, case_rate: 436.3, deaths: 29, death_rate: 201.7},
  {county: "Haywood", cases: 436, case_rate: 460.7, deaths: 172, death_rate: 167.6},
  {county: "Henderson", cases: 830, case_rate: 457.5, deaths: 306, death_rate: 159.8},
  {county: "Jackson", cases: 217, case_rate: 394.7, deaths: 69, death_rate: 129.5},
  {county: "Macon", cases: 301, case_rate: 491.2, deaths: 104, death_rate: 161.8},
  {county: "Swain", cases: 103, case_rate: 560.6, deaths: 28, death_rate: 145.1},
  {county: "Transylvania", cases: 275, case_rate: 487.9, deaths: 84, death_rate: 136.6}
]

@Component({
  selector: 'app-stats-screen',
  templateUrl: './stats-screen.component.html',
  styleUrls: ['./stats-screen.component.css']
})

/** 
 * Component for the stats screen.
 */
export class StatsScreenComponent implements OnInit {

  /**The data being displayed.*/
  data: cancerData[];
  /**The attribute data for persistence. */
  attributeData: AttributeData = AttributeData.getInstance();
  /**The headings of the columns.*/
  columnHeads: string[] = ["county", "cases", "case_rate", "deaths", "death_rates"];
  /** Reference to the Constraints class. */
  constraints: Constraints = new Constraints();

  /**The documents to display.*/
  documents: string[] = ["2010 Cancer", "2010 Population Age", 
    "2011 Cancer", "2011 Population Age", "2012 Cancer", 
    "2012 Population Age", "2013 Cancer", "2013 Population Age", 
    "2014 Cancer", "2014 Population Age"];

  constructor(private cs: CountiesService) { }

  /**Initializes data.*/
  ngOnInit() {
    this.cs.getCountyCancer(1).subscribe((cData: cancerData[]) => {this.data=cData});
  }

  /**
  * When the radio changes, change the data.
  * @param event The change event.
  */
  radioChange(event: MatRadioChange) {
    switch(event.value) {
      case this.documents[0]: 
        this.cs.getCountyCancer(0).subscribe((cData: cancerData[]) => {this.data=cData});
        break;
      case this.documents[2]: 
        this.cs.getCountyCancer(1).subscribe((cData: cancerData[]) => {this.data=cData});
        break;
      case this.documents[4]: 
        this.cs.getCountyCancer(2).subscribe((cData: cancerData[]) => {this.data=cData});
        break;
      case this.documents[6]: 
        this.cs.getCountyCancer(3).subscribe((cData: cancerData[]) => {this.data=cData});
        break;
      case this.documents[8]: 
        this.cs.getCountyCancer(4).subscribe((cData: cancerData[]) => {this.data=cData});
        break;
    }
  }

}
