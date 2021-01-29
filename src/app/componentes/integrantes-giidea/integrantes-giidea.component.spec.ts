import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrantesGiideaComponent } from './integrantes-giidea.component';

describe('IntegrantesGiideaComponent', () => {
  let component: IntegrantesGiideaComponent;
  let fixture: ComponentFixture<IntegrantesGiideaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegrantesGiideaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrantesGiideaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
