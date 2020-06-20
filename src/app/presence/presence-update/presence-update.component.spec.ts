import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenceUpdateComponent } from './presence-update.component';

describe('PresenceUpdateComponent', () => {
  let component: PresenceUpdateComponent;
  let fixture: ComponentFixture<PresenceUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresenceUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresenceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
