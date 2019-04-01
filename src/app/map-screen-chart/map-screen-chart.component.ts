import { Component, OnInit, Inject } from '@angular/core';
import * as CanvasJS from 'canvasjs/canvasjs.min';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface ExData {
  County: String;
  IncidenceCases: number;
  IncidenceRate: number;
  Deaths: number;
  MortalityRate: number;
}

const EXAMPLE_DATA: ExData[] = [
  {County: "Buncombe", IncidenceCases: 1536, IncidenceRate: 460.8, Deaths: 551, MortalityRate: 160.5},
  {County: "Haywood", IncidenceCases: 436, IncidenceRate: 460.7, Deaths: 172, MortalityRate: 167.6},
  {County: "Jackson", IncidenceCases: 217, IncidenceRate: 394.7, Deaths: 69, MortalityRate: 129.5},
  {County: "Macon", IncidenceCases: 301, IncidenceRate: 491.2, Deaths: 104, MortalityRate: 161.8},
  {County: "Swain", IncidenceCases: 103, IncidenceRate: 560.6, Deaths: 28, MortalityRate: 145.1},
  {County: "Buncombe", IncidenceCases: 1536, IncidenceRate: 460.8, Deaths: 551, MortalityRate: 160.5},
  {County: "Haywood", IncidenceCases: 436, IncidenceRate: 460.7, Deaths: 172, MortalityRate: 167.6},
  {County: "Jackson", IncidenceCases: 217, IncidenceRate: 394.7, Deaths: 69, MortalityRate: 129.5},
  {County: "Macon", IncidenceCases: 301, IncidenceRate: 491.2, Deaths: 104, MortalityRate: 161.8},
  {County: "Swain", IncidenceCases: 103, IncidenceRate: 560.6, Deaths: 28, MortalityRate: 145.1}
]

@Component({
  selector: 'app-map-screen-chart',
  templateUrl: './map-screen-chart.component.html',
  styleUrls: ['./map-screen-chart.component.css']
})
export class MapScreenChartComponent implements OnInit {
  data: ExData[] = EXAMPLE_DATA;
  columnHeads: string[] = ["County", "IncidenceCases", "IncidenceRate", "Deaths", "MortalityRate"];
  chart1: CanvasJS.Chart;

  constructor() { }

  ngOnInit() {  }

  loadGraph() {
    this.chart1 = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      axisY: {
        titleFontColor: "#4F81BC",
        lineColor: "#4F81BC",
        labelFontColor: "#4F81BC",
        tickColor: "#4F81BC"
      },
      toolTip: {
        shared: true
      },
      legend: {
        cursor:"pointer",
        itemclick: "toggleDataSeries"
      },
      data: [{
        type: "column",
        name: "Number of Cancer Cases",
        legendText: "Cancer Cases",
        showInLegend: true, 
        dataPoints:[
          {label: "Buncombe", y: 1536},
          {label: "Haywood", y: 436},
          {label: "Jackson", y: 217},
          {label: "Macon", y: 301},
          {label: "Swain", y: 103}
        ], 
      },
      {
        type: "column",	
        name: "Number of Deaths",
        legendText: "Deaths",
        showInLegend: true,
        dataPoints:[
          {label: "Buncombe", y: 551},
          {label: "Haywood", y: 172},
          {label: "Jackson", y: 69},
          {label: "Macon", y: 104},
          {label: "Swain", y: 28}
        ]
      }]
    });

    this.chart1.render();
  }

}


@Component({
  selector: 'graph-dialog',
  templateUrl: 'graph-dialog'
})
export class GraphDialog {
  constructor(public dialogRef: MatDialogRef<GraphDialog>, 
    @Inject(MAT_DIALOG_DATA) public data: ExData) {}
}