import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetAllComponent } from './projet-all.component';

describe('ProjetAllComponent', () => {
  let component: ProjetAllComponent;
  let fixture: ComponentFixture<ProjetAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
