import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  noteData = {};
  notes = [
    {
      description: 'sample note 1',
      date: new Date(),
      category: 'yellow',
    },
    {
      description: 'sample note 2',
      date: new Date(),
      category: 'green',
    },
    {
      description: 'sample note 3',
      date: new Date(),
      category: 'red',
    },
  ];
  constructor(private commonService: CommonService) {
    //this.saveNotes();
  }

  /**
   * Gets all users
   * @returns users
   */
  getAllNotes() {
    let notes = [];
    notes = JSON.parse(localStorage.getItem('notes'));
    return notes;
  }
  /**
   * Save notes to local storage
   * @returns users
   */
  saveNoteToLocalStorage(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  /**
   * Delete Note
   * @param user
   * @returns user
   */
  updateNotesAfterDelete(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  sendNoteData(data) {
    this.noteData = data;
  }

  getNoteData() {
    return this.noteData;
  }
}
