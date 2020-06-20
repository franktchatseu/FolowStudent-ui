import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacheAllComponent } from './tache-all.component';

describe('TacheAllComponent', () => {
  let component: TacheAllComponent;
  let fixture: ComponentFixture<TacheAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacheAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacheAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
