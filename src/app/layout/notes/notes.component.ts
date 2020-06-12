import { MatDialog } from '@angular/material/dialog';
import { EditNotesDialogComponent } from './edit-notes-dialog/edit-notes-dialog.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../shared/services';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  notes = [];

  constructor(
    public noteService: NoteService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getAllNotes();
  }

  getAllNotes() {
    console.log('yes cAKLLED 27');
    this.notes = this.noteService.getAllNotes();
  }

  deleteNote(index) {
    this.notes.splice(index, 1);
    this.noteService.updateNotesAfterDelete(this.notes);
  }

  openEditDialog(note, index) {
    console.log('note', note);
    this.dialog.open(EditNotesDialogComponent, {
      width: '50%',
      autoFocus: false,
    });
    note.index = index;
    this.noteService.sendNoteData(note);
  }

  ngOnDestroy() {
    //unsubscribe here all subscription
  }
}
