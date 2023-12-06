import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousecomponentComponent } from './housecomponent.component';

describe('HousecomponentComponent', () => {
  let component: HousecomponentComponent;
  let fixture: ComponentFixture<HousecomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HousecomponentComponent]
    });
    fixture = TestBed.createComponent(HousecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
