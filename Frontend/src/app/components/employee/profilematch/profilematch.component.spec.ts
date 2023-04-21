import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilematchComponent } from './profilematch.component';

describe('ProfilematchComponent', () => {
  let component: ProfilematchComponent;
  let fixture: ComponentFixture<ProfilematchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilematchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilematchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
