import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursorDotComponent } from './cursor-dot.component';

describe('CursorDotComponent', () => {
  let component: CursorDotComponent;
  let fixture: ComponentFixture<CursorDotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursorDotComponent]
    });
    fixture = TestBed.createComponent(CursorDotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
