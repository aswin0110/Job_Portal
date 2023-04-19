import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniManageJobpostComponent } from './alumni-manage-jobpost.component';

describe('AlumniManageJobpostComponent', () => {
  let component: AlumniManageJobpostComponent;
  let fixture: ComponentFixture<AlumniManageJobpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumniManageJobpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumniManageJobpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
