import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { UserAuthenticationService } from 'app/shared/services/user-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() sidebar: SidebarComponent;

  public userProfile: any;

  constructor(private userAuthenticationService: UserAuthenticationService) {}

  ngOnInit() {
    this.userProfile = JSON.parse(localStorage.getItem('currentUser'));
  }

  toggleSidebar() {
    this.sidebar.toggleSidenav();
  }

  logout() {
    this.userAuthenticationService.doLogout();
  }

  ngOnDestroy() {
    //unsubscribe here all subscription
  }
}
