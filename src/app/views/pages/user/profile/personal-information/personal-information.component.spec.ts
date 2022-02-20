import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PortletModule } from '../../../../../../app/views/partials/content/general/portlet/portlet.module';

import { PersonalInformationComponent } from './personal-information.component';

describe('PersonalInformationComponent', () => {
  let component: PersonalInformationComponent;
  let fixture: ComponentFixture<PersonalInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalInformationComponent],
      imports: [PortletModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
