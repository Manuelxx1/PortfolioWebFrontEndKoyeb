import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarExperienciaComponent } from './eliminar-experiencia.component';

describe('EliminarExperienciaComponent', () => {
  let component: EliminarExperienciaComponent;
  let fixture: ComponentFixture<EliminarExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarExperienciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
