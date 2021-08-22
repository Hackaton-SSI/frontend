import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFullscreenComponent } from './modal-fullscreen.component';

describe('ModalFullscreenComponent', () => {
  let component: ModalFullscreenComponent;
  let fixture: ComponentFixture<ModalFullscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFullscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFullscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
