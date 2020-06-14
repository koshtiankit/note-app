import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmDialogComponent, CommonService, NoteService } from '@shared';
import { EditNotesDialogComponent } from './edit-notes-dialog/edit-notes-dialog.component';

const NOTELISTURL = '/application/notes?category=all';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  private allSubscribers: Array<any> = [];
  isLoading: boolean = true;
  notes = [];
  categoryFilter: string = 'all';

  constructor(
    private commonService: CommonService,
    public noteService: NoteService,
    private dialog: MatDialog,
    public router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if (this.router.url !== NOTELISTURL) {
      this.commonService.appendURLParameters('category', 'all');
    }

    this.allSubscribers.push(
      this.route.queryParams.subscribe((params) => {
        this.categoryFilter = params.category || 'all';
        this.getAllNotes();
      })
    );
  }

  getAllNotes(data?) {
    this.notes = this.noteService.getAllNotes();

    //filtering notes based on filter value
    if (this.categoryFilter !== 'all') {
      this.notes = this.notes.filter(
        (note) => note.category == this.categoryFilter
      );
    }
    this.isLoading = false;
  }

  deleteNote(index) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.data = {
      title: 'Delete Note',
      body: 'Are you sure you want to delete this note?',
      okButton: true,
      cancelButton: true,
    };
    const dialogRef = this.dialog.open(ConfirmDialogComponent, dialogConfig);

    this.allSubscribers.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.notes.splice(index, 1);
          this.noteService.saveNoteToLocalStorage(this.notes);
          this.isLoading = false;
        }
      })
    );
  }

  openEditDialog(note, index) {
    this.dialog.open(EditNotesDialogComponent, {
      width: '50%',
      autoFocus: false,
    });
    note.index = index;
    this.noteService.sendNoteData(note);
  }

  ngOnDestroy() {
    //unsubscribe here all subscription
    this.allSubscribers.map((value) => value.unsubscribe());
  }
}
