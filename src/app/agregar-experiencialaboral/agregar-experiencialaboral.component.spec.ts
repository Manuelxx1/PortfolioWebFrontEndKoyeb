import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarExperiencialaboralComponent } from './agregar-experiencialaboral.component';

describe('AgregarExperiencialaboralComponent', () => {
  let component: AgregarExperiencialaboralComponent;
  let fixture: ComponentFixture<AgregarExperiencialaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarExperiencialaboralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarExperiencialaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
