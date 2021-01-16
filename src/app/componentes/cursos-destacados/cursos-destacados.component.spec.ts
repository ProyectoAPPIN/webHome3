import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosDestacadosComponent } from './cursos-destacados.component';

describe('CursosDestacadosComponent', () => {
  let component: CursosDestacadosComponent;
  let fixture: ComponentFixture<CursosDestacadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosDestacadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosDestacadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
