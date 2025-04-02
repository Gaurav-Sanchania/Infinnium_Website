import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Solution1LayoutComponent } from './solution1-layout.component';

describe('Solution1LayoutComponent', () => {
  let component: Solution1LayoutComponent;
  let fixture: ComponentFixture<Solution1LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Solution1LayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Solution1LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
