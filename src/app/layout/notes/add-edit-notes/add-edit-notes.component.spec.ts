import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditNotesComponent } from './add-edit-notes.component';

describe('AddEditNotesComponent', () => {
  let component: AddEditNotesComponent;
  let fixture: ComponentFixture<AddEditNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
