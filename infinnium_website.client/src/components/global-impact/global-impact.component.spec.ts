import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalImpactComponent } from './global-impact.component';

describe('GlobalImpactComponent', () => {
  let component: GlobalImpactComponent;
  let fixture: ComponentFixture<GlobalImpactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalImpactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
