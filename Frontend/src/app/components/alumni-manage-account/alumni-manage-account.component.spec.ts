import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniManageAccountComponent } from './alumni-manage-account.component';

describe('AlumniManageAccountComponent', () => {
  let component: AlumniManageAccountComponent;
  let fixture: ComponentFixture<AlumniManageAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumniManageAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumniManageAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
