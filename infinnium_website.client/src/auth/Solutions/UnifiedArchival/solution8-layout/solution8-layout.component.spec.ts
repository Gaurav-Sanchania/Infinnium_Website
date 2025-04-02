import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Solution8LayoutComponent } from './solution8-layout.component';

describe('Solution8LayoutComponent', () => {
  let component: Solution8LayoutComponent;
  let fixture: ComponentFixture<Solution8LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Solution8LayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Solution8LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
