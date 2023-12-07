import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfohouseComponent } from './infohouse.component';

describe('InfohouseComponent', () => {
  let component: InfohouseComponent;
  let fixture: ComponentFixture<InfohouseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfohouseComponent]
    });
    fixture = TestBed.createComponent(InfohouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
