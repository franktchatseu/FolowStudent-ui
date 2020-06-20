import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentaionAllComponent } from './documentaion-all.component';

describe('DocumentaionAllComponent', () => {
  let component: DocumentaionAllComponent;
  let fixture: ComponentFixture<DocumentaionAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentaionAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentaionAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
