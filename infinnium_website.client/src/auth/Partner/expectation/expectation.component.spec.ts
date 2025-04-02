import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpectationComponent } from './expectation.component';

describe('ExpectationComponent', () => {
  let component: ExpectationComponent;
  let fixture: ComponentFixture<ExpectationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpectationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpectationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
