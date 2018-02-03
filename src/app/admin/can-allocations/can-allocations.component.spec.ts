import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanAllocationsComponent } from './can-allocations.component';

describe('CanAllocationsComponent', () => {
  let component: CanAllocationsComponent;
  let fixture: ComponentFixture<CanAllocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanAllocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanAllocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
