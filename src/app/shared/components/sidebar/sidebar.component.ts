import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, CommonService } from '../../services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, AfterViewInit, OnDestroy {
  public isSidenavExpanded: boolean = false;
  public menuList = [];

  constructor(
    public router: Router,
    private cd: ChangeDetectorRef,
    private commonService: CommonService,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {}

  toggleSidenav() {
    this.isSidenavExpanded = !this.isSidenavExpanded;
  }

  ngOnDestroy() {
    //unsubscribe here all subscription
  }
}
