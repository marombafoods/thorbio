import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResultadoComponent } from './resultado.component';

describe('ResultadoComponent', () => {
  let component: ResultadoComponent;
  let fixture: ComponentFixture<ResultadoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
