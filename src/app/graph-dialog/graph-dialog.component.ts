import { Component, OnInit, Inject } from '@angular/core';
import * as CanvasJS from 'canvasjs/canvasjs.min';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { cancerData } from '../map-screen-chart/map-screen-chart.component';

interface displayData {
  label: string;
  y: number;
}

/**
 * A popup dialog box for displaying a graph.
 */
@Component({
  selector: 'app-graph-dialog',
  templateUrl: './graph-dialog.component.html',
  styleUrls: ['./graph-dialog.component.css']
})
export class GraphDialogComponent implements OnInit {

  /**
   * Default construct
   * @param dialogRef Reference to the dialog.
   * @param data The data to display.
   */
  constructor(public dialogRef: MatDialogRef<GraphDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: cancerData[]) { }

    /**The chart object.*/
    chart1: CanvasJS.Chart;
    /**The cases data to display.*/
    casesData: displayData[] = new Array();
    /**The deaths data to display. */
    deathsData: displayData[] = new Array();

    /**
     * Formats the data and displays the chart.
     */
    ngOnInit() { 
      this.formatData();
      this.chart1 = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        exportEnabled: true,
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
          dataPoints: this.casesData
        },
        {
          type: "column",	
          name: "Number of Deaths",
          legendText: "Deaths",
          showInLegend: true,
          dataPoints: this.deathsData
        }]
      });
  
      this.chart1.render(); 
    }

    /**
     * Formats the data by splitting up data.
     */
    formatData() {
      for(var i = 0; i < this.data.length && i < 10; i++) {
        this.casesData.push({label: this.data[i].county.toString(), y: this.data[i].cases});
        this.deathsData.push({label: this.data[i].county.toString(), y: this.data[i].deaths});
      }
    }

    /*ngOnInit() { 
      this.chart1 = new CanvasJS.Chart("chartContainer", {
        title: {
          text: "Jackson County"
        },
        animationEnabled: true,
        axisY: {
          titleFontColor: "#4F81BC",
          lineColor: "#4F81BC",
          labelFontColor: "#4F81BC",
          tickColor: "#4F81BC"
        },
        axisX: {
          valueFormatString: "####"
        },
        toolTip: {
          shared: true
        },
        legend: {
          cursor:"pointer",
          itemclick: "toggleDataSeries"
        },
        data: [{
          type: "line",
          name: "Number of Cancer Cases",
          legendText: "Cancer Cases",
          showInLegend: true, 
          xValueFormatString: "####",
          dataPoints:[
            {x: 2010, y: 212},
            {x: 2011, y: 224},
            {x: 2012, y: 214},
            {x: 2013, y: 203},
            {x: 2014, y: 217}
          ], 
        },
        {
          type: "line",	
          name: "Number of Deaths",
          legendText: "Deaths",
          showInLegend: true,
          xValueFormatString: "####",
          dataPoints:[
            {x: 2010, y: 91},
            {x: 2011, y: 79},
            {x: 2012, y: 76},
            {x: 2013, y: 99},
            {x: 2014, y: 69}
          ]
        }]
      });
  
      this.chart1.render(); 
    }*/

}
