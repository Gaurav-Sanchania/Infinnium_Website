import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReachOutComponent } from './reach-out.component';

describe('ReachOutComponent', () => {
  let component: ReachOutComponent;
  let fixture: ComponentFixture<ReachOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReachOutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReachOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
