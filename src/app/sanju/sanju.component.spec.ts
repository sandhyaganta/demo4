import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanjuComponent } from './sanju.component';

describe('SanjuComponent', () => {
  let component: SanjuComponent;
  let fixture: ComponentFixture<SanjuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SanjuComponent]
    });
    fixture = TestBed.createComponent(SanjuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
