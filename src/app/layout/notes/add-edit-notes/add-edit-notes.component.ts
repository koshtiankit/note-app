import { Router } from '@angular/router';
import { NoteService } from './../../../shared/services/note.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-edit-notes',
  templateUrl: './add-edit-notes.component.html',
  styleUrls: ['./add-edit-notes.component.scss'],
})
export class AddEditNotesComponent implements OnInit {
  notesForm: FormGroup;

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
    const notes = this.noteService.getAllNotes();
    if (!notes) {
      const dataToPush = [
        {
          created: new Date(),
          description: this.notesForm.value.description,
          category: this.notesForm.value.category,
        },
      ];
      this.noteService.saveNoteToLocalStorage(dataToPush);
      this.router.navigate(['./application/notes']);
    } else {
      notes &&
        notes.map((note, index) => {
          if (index == this.notesForm.value.id) {
            notes[index]['created'] = new Date();
            notes[index]['description'] = this.notesForm.value.description;
            notes[index]['category'] = this.notesForm.value.category;
          } else {
            const dataToPush = {
              created: new Date(),
              description: this.notesForm.value.description,
              category: this.notesForm.value.category,
            };
            notes.push(dataToPush);
          }
        });
      this.noteService.saveNoteToLocalStorage(notes);
      this.router.navigate(['./application/notes']);
    }
  }
  ngOnDestroy() {
    //unsubscribe here all subscription
    this.noteService.sendNoteData(null);
  }
}
