import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Solution10LayoutComponent } from './solution10-layout.component';

describe('Solution10LayoutComponent', () => {
  let component: Solution10LayoutComponent;
  let fixture: ComponentFixture<Solution10LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Solution10LayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Solution10LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
