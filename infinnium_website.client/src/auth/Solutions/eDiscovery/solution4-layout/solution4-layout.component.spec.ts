import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Solution4LayoutComponent } from './solution4-layout.component';

describe('Solution4LayoutComponent', () => {
  let component: Solution4LayoutComponent;
  let fixture: ComponentFixture<Solution4LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Solution4LayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Solution4LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
