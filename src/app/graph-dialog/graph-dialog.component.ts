import { Component, OnInit, Inject } from '@angular/core';
import * as CanvasJS from 'canvasjs/canvasjs.min';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ExData } from '../map-screen-chart/map-screen-chart.component';

@Component({
  selector: 'app-graph-dialog',
  templateUrl: './graph-dialog.component.html',
  styleUrls: ['./graph-dialog.component.css']
})
export class GraphDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<GraphDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: ExData) { }

    chart1: CanvasJS.Chart;

    ngOnInit() { 
      console.log("init");
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
