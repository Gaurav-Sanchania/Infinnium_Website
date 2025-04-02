import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Solution3LayoutComponent } from './solution3-layout.component';

describe('Solution3LayoutComponent', () => {
  let component: Solution3LayoutComponent;
  let fixture: ComponentFixture<Solution3LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Solution3LayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Solution3LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
