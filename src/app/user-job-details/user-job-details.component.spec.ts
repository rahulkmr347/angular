import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserJobDetailsComponent } from './user-job-details.component';

describe('UserJobDetailsComponent', () => {
  let component: UserJobDetailsComponent;
  let fixture: ComponentFixture<UserJobDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserJobDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserJobDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
