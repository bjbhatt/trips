import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanFormComponent } from './can-form.component';

describe('CanFormComponent', () => {
  let component: CanFormComponent;
  let fixture: ComponentFixture<CanFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
