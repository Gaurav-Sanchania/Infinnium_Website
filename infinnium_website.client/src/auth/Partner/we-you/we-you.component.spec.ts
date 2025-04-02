import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeYouComponent } from './we-you.component';

describe('WeYouComponent', () => {
  let component: WeYouComponent;
  let fixture: ComponentFixture<WeYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeYouComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
