import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Solution5LayoutComponent } from './solution5-layout.component';

describe('Solution5LayoutComponent', () => {
  let component: Solution5LayoutComponent;
  let fixture: ComponentFixture<Solution5LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Solution5LayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Solution5LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
