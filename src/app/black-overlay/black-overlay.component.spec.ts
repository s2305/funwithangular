import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackOverlayComponent } from './black-overlay.component';

describe('BlackOverlayComponent', () => {
  let component: BlackOverlayComponent;
  let fixture: ComponentFixture<BlackOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
