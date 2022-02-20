import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ActivateUserComponent } from './activate-user.component';

describe('ActivateUserComponent', () => {
  let component: ActivateUserComponent;
  let fixture: ComponentFixture<ActivateUserComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivateUserComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
