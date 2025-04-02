import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Solution2LayoutComponent } from './solution2-layout.component';

describe('Solution2LayoutComponent', () => {
  let component: Solution2LayoutComponent;
  let fixture: ComponentFixture<Solution2LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Solution2LayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Solution2LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
