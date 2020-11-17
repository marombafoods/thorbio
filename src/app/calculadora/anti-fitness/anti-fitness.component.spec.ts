import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiFitnessComponent } from './anti-fitness.component';

describe('AntiFitnessComponent', () => {
  let component: AntiFitnessComponent;
  let fixture: ComponentFixture<AntiFitnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntiFitnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntiFitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
