import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedLeadersComponent } from './trusted-leaders.component';

describe('TrustedLeadersComponent', () => {
  let component: TrustedLeadersComponent;
  let fixture: ComponentFixture<TrustedLeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrustedLeadersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrustedLeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
