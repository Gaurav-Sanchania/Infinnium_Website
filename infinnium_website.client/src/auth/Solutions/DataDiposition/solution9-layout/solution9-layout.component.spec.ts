import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Solution9LayoutComponent } from './solution9-layout.component';

describe('Solution9LayoutComponent', () => {
  let component: Solution9LayoutComponent;
  let fixture: ComponentFixture<Solution9LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Solution9LayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Solution9LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
