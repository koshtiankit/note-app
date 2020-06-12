import { Router } from '@angular/router';
import { NoteService } from './../../../shared/services/note.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-add-edit-notes',
  templateUrl: './add-edit-notes.component.html',
  styleUrls: ['./add-edit-notes.component.scss'],
})
export class AddEditNotesComponent implements OnInit {
  notesForm: FormGroup;
  @Output() notesListCallBack: EventEmitter<any> = new EventEmitter();

  categories = [
    { name: 'darkgrey' },
    { name: 'darkcyan' },
    { name: 'cadetblue' },
    { name: 'chocolate' },
    { name: 'darkgoldenrod' },
    { name: 'crimson' },
    { name: 'yellowgreen' },
  ];
  constructor(
    private formBuilder: FormBuilder,
    private noteService: NoteService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createLoginForm();
    const noteData = this.noteService.getNoteData();
    if (noteData) this.setNoteDataToForm(noteData);
  }

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

  saveNote() {
    console.log('this save called 55', this.notesForm.value.id);
    if (this.notesForm.value.id || this.notesForm.value.id == 0) {
      console.log('hete 64');
      //update call
      this.updateNote();
    } else {
      // add new
      //Check if any notes then just push in and save it
      let notes = [];
      notes = this.noteService.getAllNotes();
      let dataToPush = {
        created: new Date(),
        description: this.notesForm.value.description,
        category: this.notesForm.value.category,
      };

      if (!notes) notes = [];
      notes.push(dataToPush);

      this.addNotes(notes);
      this.notesListCallBack.emit(notes);
    }
  }

  addNotes(dataToPush) {
    this.noteService.saveNoteToLocalStorage(dataToPush);
  }

  updateNote() {
    const noteData = this.noteService.getNoteData();
    console.log('noteData 90', noteData);

    const oldText = noteData['description'];

    let notes = this.noteService.getAllNotes();

    for (let i = 0; i < notes.length; i++) {
      if (notes[i].description == oldText) {
        notes[i].description = this.notesForm.value.description;
        notes[i].category = this.notesForm.value.category;
      }
    }
    // Set New Notes
    this.addNotes(notes);
  }

  ngOnDestroy() {
    //unsubscribe here all subscription
    this.noteService.sendNoteData(null);
  }
}
