import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesoradoComponent } from './profesorado.component';

describe('ProfesoradoComponent', () => {
  let component: ProfesoradoComponent;
  let fixture: ComponentFixture<ProfesoradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesoradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesoradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
