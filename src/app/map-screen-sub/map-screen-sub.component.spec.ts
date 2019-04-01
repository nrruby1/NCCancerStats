import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapScreenSubComponent } from './map-screen-sub.component';

describe('MapScreenSubComponent', () => {
  let component: MapScreenSubComponent;
  let fixture: ComponentFixture<MapScreenSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapScreenSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapScreenSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
