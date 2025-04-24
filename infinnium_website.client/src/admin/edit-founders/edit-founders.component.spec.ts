import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFoundersComponent } from './edit-founders.component';

describe('EditFoundersComponent', () => {
  let component: EditFoundersComponent;
  let fixture: ComponentFixture<EditFoundersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditFoundersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFoundersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
