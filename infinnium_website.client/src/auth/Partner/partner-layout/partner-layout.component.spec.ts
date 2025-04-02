import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerLayoutComponent } from './partner-layout.component';

describe('PartnerLayoutComponent', () => {
  let component: PartnerLayoutComponent;
  let fixture: ComponentFixture<PartnerLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnerLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
