import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsListLayoutComponent } from './blogs-list-layout.component';

describe('BlogsListLayoutComponent', () => {
  let component: BlogsListLayoutComponent;
  let fixture: ComponentFixture<BlogsListLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogsListLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogsListLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
