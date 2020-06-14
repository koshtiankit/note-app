import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { NoteService } from 'app/shared/services/note.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, AfterViewInit, OnDestroy {
  public isSidenavExpanded: boolean = false;

  constructor(public noteService: NoteService) {}

  ngOnInit() {}

  ngAfterViewInit() {}

  toggleSidenav() {
    this.isSidenavExpanded = !this.isSidenavExpanded;
  }

  ngOnDestroy() {
    //unsubscribe here all subscription
  }
}
