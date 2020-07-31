import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RFN004Component } from './rfn004.component';

describe('RFN004Component', () => {
  let component: RFN004Component;
  let fixture: ComponentFixture<RFN004Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RFN004Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RFN004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
