import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeefrontComponent } from './employeefront.component';

describe('EmployeefrontComponent', () => {
  let component: EmployeefrontComponent;
  let fixture: ComponentFixture<EmployeefrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeefrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeefrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
