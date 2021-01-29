import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaProcedimientosComponent } from './guia-procedimientos.component';

describe('GuiaProcedimientosComponent', () => {
  let component: GuiaProcedimientosComponent;
  let fixture: ComponentFixture<GuiaProcedimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuiaProcedimientosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiaProcedimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
