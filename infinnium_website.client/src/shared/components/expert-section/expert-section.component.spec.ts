import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertSectionComponent } from './expert-section.component';

describe('ExpertSectionComponent', () => {
  let component: ExpertSectionComponent;
  let fixture: ComponentFixture<ExpertSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpertSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpertSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
