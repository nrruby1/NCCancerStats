import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeTabsComponent } from './attribute-tabs.component';

describe('AttributeTabsComponent', () => {
  let component: AttributeTabsComponent;
  let fixture: ComponentFixture<AttributeTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
