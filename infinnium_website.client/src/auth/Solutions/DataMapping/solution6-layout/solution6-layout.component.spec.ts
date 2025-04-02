import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Solution6LayoutComponent } from './solution6-layout.component';

describe('Solution6LayoutComponent', () => {
  let component: Solution6LayoutComponent;
  let fixture: ComponentFixture<Solution6LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Solution6LayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Solution6LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
