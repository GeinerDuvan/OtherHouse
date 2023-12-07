import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditinmuebleComponent } from './editinmueble.component';

describe('EditinmuebleComponent', () => {
  let component: EditinmuebleComponent;
  let fixture: ComponentFixture<EditinmuebleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditinmuebleComponent]
    });
    fixture = TestBed.createComponent(EditinmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
