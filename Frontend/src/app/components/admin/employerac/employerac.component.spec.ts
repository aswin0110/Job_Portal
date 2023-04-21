import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeracComponent } from './employerac.component';

describe('EmployeracComponent', () => {
  let component: EmployeracComponent;
  let fixture: ComponentFixture<EmployeracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeracComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
