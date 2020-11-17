import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MedidasComponent } from './medidas.component';

describe('MedidasComponent', () => {
  let component: MedidasComponent;
  let fixture: ComponentFixture<MedidasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MedidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
