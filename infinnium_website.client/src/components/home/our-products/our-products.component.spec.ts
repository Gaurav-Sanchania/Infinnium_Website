import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProductsComponent } from './our-products.component';

describe('OurProductsComponent', () => {
  let component: OurProductsComponent;
  let fixture: ComponentFixture<OurProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
