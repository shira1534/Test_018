import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterorloginComponent } from './registerorlogin.component';

describe('RegisterorloginComponent', () => {
  let component: RegisterorloginComponent;
  let fixture: ComponentFixture<RegisterorloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterorloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterorloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
