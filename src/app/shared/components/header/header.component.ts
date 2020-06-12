import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { UserAuthenticationService } from '../../services/user-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() sidebar: SidebarComponent;

  public allSubscribers: Array<any> = [];
  public userProfile: any;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private userAuthenticationService: UserAuthenticationService
  ) {}

  ngOnInit() {
    //this.userProfile = JSON.parse(localStorage.getItem('currentUser'));
    this.userProfile = {
      FirstName: 'Ankit',
      LastName: 'Koshti',
    };
  }

  public toggleSidebar() {
    this.sidebar.toggleSidenav();
  }

  public logout() {
    this.userAuthenticationService.logout();
  }

  ngOnDestroy() {
    this.allSubscribers.map((value) => value.unsubscribe());
  }
}
