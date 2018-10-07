import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninRoutComponent } from './signin-rout.component';

describe('SigninRoutComponent', () => {
  let component: SigninRoutComponent;
  let fixture: ComponentFixture<SigninRoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninRoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninRoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
