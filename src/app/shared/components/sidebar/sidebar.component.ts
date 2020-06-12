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
  public allSubscribers: Array<any> = [];
  public isSidenavExpanded: boolean = true;
  public menuList = [];

  constructor(
    public router: Router,
    private cd: ChangeDetectorRef,
    private commonService: CommonService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    //let data = JSON.parse(localStorage.getItem('currentUser')).RolePermission;
    // console.log('data', data);
    this.menuList = JSON.parse(localStorage.getItem('menuList'));
  }

  ngAfterViewInit() {}

  public toggleSidenav() {
    this.isSidenavExpanded = !this.isSidenavExpanded;
  }

  ngOnDestroy() {
    this.allSubscribers.map((value) => value.unsubscribe());
  }
}
