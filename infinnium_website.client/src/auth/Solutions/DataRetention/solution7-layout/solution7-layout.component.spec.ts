import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Solution7LayoutComponent } from './solution7-layout.component';

describe('Solution7LayoutComponent', () => {
  let component: Solution7LayoutComponent;
  let fixture: ComponentFixture<Solution7LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Solution7LayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Solution7LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
