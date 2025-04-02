import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNewsLayoutComponent } from './single-news-layout.component';

describe('SingleNewsLayoutComponent', () => {
  let component: SingleNewsLayoutComponent;
  let fixture: ComponentFixture<SingleNewsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleNewsLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleNewsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
