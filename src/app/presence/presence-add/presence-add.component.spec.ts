import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenceAddComponent } from './presence-add.component';

describe('PresenceAddComponent', () => {
  let component: PresenceAddComponent;
  let fixture: ComponentFixture<PresenceAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresenceAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresenceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
