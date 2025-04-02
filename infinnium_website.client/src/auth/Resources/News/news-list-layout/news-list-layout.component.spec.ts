import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListLayoutComponent } from './news-list-layout.component';

describe('NewsListLayoutComponent', () => {
  let component: NewsListLayoutComponent;
  let fixture: ComponentFixture<NewsListLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsListLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsListLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
