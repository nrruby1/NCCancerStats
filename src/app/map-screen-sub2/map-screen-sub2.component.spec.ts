import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapScreenSub2Component } from './map-screen-sub2.component';

describe('MapScreenSub2Component', () => {
  let component: MapScreenSub2Component;
  let fixture: ComponentFixture<MapScreenSub2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapScreenSub2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapScreenSub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
