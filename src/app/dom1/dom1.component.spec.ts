import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dom1Component } from './dom1.component';

describe('Dom1Component', () => {
  let component: Dom1Component;
  let fixture: ComponentFixture<Dom1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dom1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dom1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
