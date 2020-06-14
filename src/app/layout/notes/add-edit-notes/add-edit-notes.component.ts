import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonService, NoteService } from '@shared';
import { EditNotesDialogComponent } from './../edit-notes-dialog/edit-notes-dialog.component';

@Component({
  selector: 'app-add-edit-notes',
  templateUrl: './add-edit-notes.component.html',
  styleUrls: ['./add-edit-notes.component.scss'],
})
export class AddEditNotesComponent implements OnInit {
  @Output() notesListCallBack: EventEmitter<any> = new EventEmitter<Boolean>();
  notesForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public noteService: NoteService,
    public commonService: CommonService,
    private router: Router,
    private dialogRef: MatDialogRef<EditNotesDialogComponent>
  ) {}

  ngOnInit() {
    this.createLoginForm();
    const noteData = this.noteService.getNoteData();
    if (noteData) this.setNoteDataToForm(noteData);
  }

  /**
   * Creates notes form
   */
  setNoteDataToForm(noteData) {
    this.notesForm.patchValue({
      description: noteData.description,
      category: noteData.category,
      id: noteData.index,
    });
  }

  /**
   * Creates notes form
   */
  createLoginForm() {
    this.notesForm = this.formBuilder.group({
      id: [],
      description: [''],
      category: [''],
    });
  }

  /**
   * Saving notes
   */
  saveNote() {
    const isEmptyNoteAndCategory = this.noteAndCategoryIsEmpty();
    if (isEmptyNoteAndCategory) return;

    if (this.notesForm.value.id || this.notesForm.value.id == 0) {
      this.updateNote();
    } else {
      // add new
      //Check if any notes then just push in and save it
      let notes = [];
      notes = this.noteService.getAllNotes();
      const dataToPush = {
        created: new Date(),
        description: this.notesForm.value.description,
        category: this.notesForm.value.category,
      };

      if (!notes) notes = [];
      notes.push(dataToPush);

      this.noteService.saveNoteToLocalStorage(notes);
      this.notesListCallBack.emit(true);
      this.notesForm.reset();
    }
  }

  /**
   * Check if note and category is empty then return
   */
  noteAndCategoryIsEmpty() {
    const description =
      this.notesForm.value.description &&
      this.notesForm.value.description.trimLeft();
    if (!description && !this.notesForm.value.category) {
      return true;
    }
    return false;
  }

  /**
   * Update existing note
   */
  updateNote() {
    const noteData = this.noteService.getNoteData();
    const oldText = noteData['description'];

    let notes = this.noteService.getAllNotes();

    for (let i = 0; i < notes.length; i++) {
      if (notes[i].description == oldText) {
        notes[i].description = this.notesForm.value.description;
        notes[i].category = this.notesForm.value.category;
      }
    }
    // Set the Notes
    this.noteService.saveNoteToLocalStorage(notes);
    //update notes list component
    this.commonService.redirectToUrl(this.router.url);
    this.dialogRef.close();
  }

  ngOnDestroy() {
    //unsubscribe here all subscription and empty necessary data
    this.noteService.sendNoteData(null);
  }
}
