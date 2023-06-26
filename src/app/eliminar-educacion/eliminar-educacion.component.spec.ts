import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEducacionComponent } from './eliminar-educacion.component';

describe('EliminarEducacionComponent', () => {
  let component: EliminarEducacionComponent;
  let fixture: ComponentFixture<EliminarEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarEducacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
