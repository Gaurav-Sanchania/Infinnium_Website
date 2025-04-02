import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBlogLayoutComponent } from './single-blog-layout.component';

describe('SingleBlogLayoutComponent', () => {
  let component: SingleBlogLayoutComponent;
  let fixture: ComponentFixture<SingleBlogLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleBlogLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleBlogLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
