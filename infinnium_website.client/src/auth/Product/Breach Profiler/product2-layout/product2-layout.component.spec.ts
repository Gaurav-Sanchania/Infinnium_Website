import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product2LayoutComponent } from './product2-layout.component';

describe('Product2LayoutComponent', () => {
  let component: Product2LayoutComponent;
  let fixture: ComponentFixture<Product2LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product2LayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product2LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
