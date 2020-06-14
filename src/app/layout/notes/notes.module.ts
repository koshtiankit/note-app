import { MatDialogRef } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared';
import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { EditNotesDialogComponent } from './edit-notes-dialog/edit-notes-dialog.component';
import { AddEditNotesComponent } from './add-edit-notes/add-edit-notes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NotesRoutingModule,
    SharedModule,
  ],
  declarations: [
    NotesComponent,
    EditNotesDialogComponent,
    AddEditNotesComponent,
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {},
    },
  ],
})
export class NotesModule {}
