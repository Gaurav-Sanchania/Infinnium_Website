import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberLayoutComponent } from './member-layout.component';

describe('MemberLayoutComponent', () => {
  let component: MemberLayoutComponent;
  let fixture: ComponentFixture<MemberLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
