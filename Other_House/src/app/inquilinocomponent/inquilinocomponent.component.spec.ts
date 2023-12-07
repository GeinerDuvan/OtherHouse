import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquilinocomponentComponent } from './inquilinocomponent.component';

describe('InquilinocomponentComponent', () => {
  let component: InquilinocomponentComponent;
  let fixture: ComponentFixture<InquilinocomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InquilinocomponentComponent]
    });
    fixture = TestBed.createComponent(InquilinocomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
