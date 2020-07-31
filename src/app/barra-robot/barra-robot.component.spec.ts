import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraRobotComponent } from './barra-robot.component';

describe('BarraRobotComponent', () => {
  let component: BarraRobotComponent;
  let fixture: ComponentFixture<BarraRobotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraRobotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraRobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
