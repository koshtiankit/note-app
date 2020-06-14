import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  noteData = {};

  categories = [
    { name: 'yellowgreen' },
    { name: 'cadetblue' },
    { name: 'chocolate' },
    { name: 'crimson' },
    { name: 'darkgoldenrod' },
    { name: 'darkcyan' },
    { name: 'cornflowerblue' },
  ];

  constructor(private commonService: CommonService) {}

  /**
   * Gets all notes
   * @returns notes
   */
  getAllNotes() {
    let notes = [];
    notes = JSON.parse(localStorage.getItem('notes'));
    return notes;
  }

  /**
   * Save notes to local storage
   *
   */
  saveNoteToLocalStorage(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  /**
   * Set note data for edit note
   * @param - data - note data object
   */
  sendNoteData(data) {
    this.noteData = data;
  }

  /**
   * get note data for edit note
   *
   */
  getNoteData() {
    return this.noteData;
  }
}
