import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationalTravelersComponent } from './invitational-travelers.component';

describe('InvitationalTravelersComponent', () => {
  let component: InvitationalTravelersComponent;
  let fixture: ComponentFixture<InvitationalTravelersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitationalTravelersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationalTravelersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
