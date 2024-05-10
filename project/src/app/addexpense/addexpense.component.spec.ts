import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddexpenseComponent } from './addexpense.component';

describe('AddexpenseComponent', () => {
  let component: AddexpenseComponent;
  let fixture: ComponentFixture<AddexpenseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddexpenseComponent]
    });
    fixture = TestBed.createComponent(AddexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
