import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundersLayoutComponent } from './founders-layout.component';

describe('FoundersLayoutComponent', () => {
  let component: FoundersLayoutComponent;
  let fixture: ComponentFixture<FoundersLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoundersLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoundersLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
