import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfileCreateComponent } from './student-profile-create.component';

describe('StudentProfileCreateComponent', () => {
  let component: StudentProfileCreateComponent;
  let fixture: ComponentFixture<StudentProfileCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentProfileCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentProfileCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
