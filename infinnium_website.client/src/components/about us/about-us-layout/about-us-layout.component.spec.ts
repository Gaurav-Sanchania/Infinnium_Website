import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsLayoutComponent } from './about-us-layout.component';

describe('AboutUsLayoutComponent', () => {
  let component: AboutUsLayoutComponent;
  let fixture: ComponentFixture<AboutUsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
