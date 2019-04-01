import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapScreenChartComponent } from './map-screen-chart.component';

describe('MapScreenChartComponent', () => {
  let component: MapScreenChartComponent;
  let fixture: ComponentFixture<MapScreenChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapScreenChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapScreenChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
