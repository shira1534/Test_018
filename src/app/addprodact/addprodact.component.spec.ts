import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprodactComponent } from './addprodact.component';

describe('AddprodactComponent', () => {
  let component: AddprodactComponent;
  let fixture: ComponentFixture<AddprodactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprodactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprodactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
