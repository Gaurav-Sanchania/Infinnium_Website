import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsLayoutComponent } from './contact-us-layout.component';

describe('ContactUsLayoutComponent', () => {
  let component: ContactUsLayoutComponent;
  let fixture: ComponentFixture<ContactUsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUsLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
