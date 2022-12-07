import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserJobDetailsComponent } from './add-user-job-details.component';

describe('AddUserJobDetailsComponent', () => {
  let component: AddUserJobDetailsComponent;
  let fixture: ComponentFixture<AddUserJobDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserJobDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserJobDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
