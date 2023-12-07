import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmuebleregComponent } from './inmueblereg.component';

describe('InmuebleregComponent', () => {
  let component: InmuebleregComponent;
  let fixture: ComponentFixture<InmuebleregComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InmuebleregComponent]
    });
    fixture = TestBed.createComponent(InmuebleregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
