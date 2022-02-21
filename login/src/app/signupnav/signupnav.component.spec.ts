import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupnavComponent } from './signupnav.component';

describe('SignupnavComponent', () => {
  let component: SignupnavComponent;
  let fixture: ComponentFixture<SignupnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
