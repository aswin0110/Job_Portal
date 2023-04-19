import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyjobComponent } from './verifyjob.component';

describe('VerifyjobComponent', () => {
  let component: VerifyjobComponent;
  let fixture: ComponentFixture<VerifyjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyjobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
