import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarexperiancialaboralComponent } from './editarexperiancialaboral.component';

describe('EditarexperiancialaboralComponent', () => {
  let component: EditarexperiancialaboralComponent;
  let fixture: ComponentFixture<EditarexperiancialaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarexperiancialaboralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarexperiancialaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
