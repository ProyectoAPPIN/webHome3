import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiferenciasMercadoComponent } from './diferencias-mercado.component';

describe('DiferenciasMercadoComponent', () => {
  let component: DiferenciasMercadoComponent;
  let fixture: ComponentFixture<DiferenciasMercadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiferenciasMercadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiferenciasMercadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
