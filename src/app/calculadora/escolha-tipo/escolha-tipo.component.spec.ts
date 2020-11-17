import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EscolhaTipoComponent } from './escolha-tipo.component';

describe('EscolhaTipoComponent', () => {
  let component: EscolhaTipoComponent;
  let fixture: ComponentFixture<EscolhaTipoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolhaTipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolhaTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
