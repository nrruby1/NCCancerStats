import { Component, OnInit, Inject } from '@angular/core';
import * as CanvasJS from 'canvasjs/canvasjs.min';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { GraphDialogComponent } from '../graph-dialog/graph-dialog.component';

export interface ExData {
  County: String;
  IncidenceCases: number;
  IncidenceRate: number;
  Deaths: number;
  MortalityRate: number;
}

const EXAMPLE_DATA: ExData[] = [
  {County: "Buncombe", IncidenceCases: 1536, IncidenceRate: 460.8, Deaths: 551, MortalityRate: 160.5},
  {County: "Cherokee", IncidenceCases: 207, IncidenceRate: 438.2, Deaths: 85, MortalityRate: 168.0},
  {County: "Clay", IncidenceCases: 57, IncidenceRate: 317.1, Deaths: 28, MortalityRate: 135.4},
  {County: "Graham", IncidenceCases: 59, IncidenceRate: 436.3, Deaths: 29, MortalityRate: 201.7},
  {County: "Haywood", IncidenceCases: 436, IncidenceRate: 460.7, Deaths: 172, MortalityRate: 167.6},
  {County: "Henderson", IncidenceCases: 830, IncidenceRate: 457.5, Deaths: 306, MortalityRate: 159.8},
  {County: "Jackson", IncidenceCases: 217, IncidenceRate: 394.7, Deaths: 69, MortalityRate: 129.5},
  {County: "Macon", IncidenceCases: 301, IncidenceRate: 491.2, Deaths: 104, MortalityRate: 161.8},
  {County: "Swain", IncidenceCases: 103, IncidenceRate: 560.6, Deaths: 28, MortalityRate: 145.1},
  {County: "Transylvania", IncidenceCases: 275, IncidenceRate: 487.9, Deaths: 84, MortalityRate: 136.6}
]

@Component({
  selector: 'app-map-screen-chart',
  templateUrl: './map-screen-chart.component.html',
  styleUrls: ['./map-screen-chart.component.css']
})
export class MapScreenChartComponent implements OnInit {
  data: ExData[] = EXAMPLE_DATA;
  columnHeads: string[] = ["County", "IncidenceCases", "IncidenceRate", "Deaths", "MortalityRate"];


  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(GraphDialogComponent, {data: this.data})
  }

  ngOnInit() {  }

}
