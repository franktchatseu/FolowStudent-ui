import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentaionAddComponent } from './documentaion-add.component';

describe('DocumentaionAddComponent', () => {
  let component: DocumentaionAddComponent;
  let fixture: ComponentFixture<DocumentaionAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentaionAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentaionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
