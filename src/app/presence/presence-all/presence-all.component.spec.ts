import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenceAllComponent } from './presence-all.component';

describe('PresenceAllComponent', () => {
  let component: PresenceAllComponent;
  let fixture: ComponentFixture<PresenceAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresenceAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresenceAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
