import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product3LayoutComponent } from './product3-layout.component';

describe('Product3LayoutComponent', () => {
  let component: Product3LayoutComponent;
  let fixture: ComponentFixture<Product3LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product3LayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product3LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
