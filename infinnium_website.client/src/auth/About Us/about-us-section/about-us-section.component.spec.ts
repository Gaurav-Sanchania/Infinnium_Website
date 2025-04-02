import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsSectionComponent } from './about-us-section.component';

describe('AboutUsSectionComponent', () => {
  let component: AboutUsSectionComponent;
  let fixture: ComponentFixture<AboutUsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
