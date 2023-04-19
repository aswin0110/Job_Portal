import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageacComponent } from './manageac.component';

describe('ManageacComponent', () => {
  let component: ManageacComponent;
  let fixture: ComponentFixture<ManageacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageacComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
