import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { ErrorHandlingService, CommonService } from '../../services';

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
    private errorHandlingService: ErrorHandlingService
  ) {}

  ngOnInit() {
    let data = JSON.parse(localStorage.getItem('currentUser')).RolePermission;
    // console.log('data', data);
    this.menuList = JSON.parse(localStorage.getItem('menuList'));
    //console.log('this.menuList 30', this.menuList);

    //this.menuList = this.commonService.getAllMenus();
    /* if(!this.menuList) {
            // incase of menu list is undefined
            this.commonService.setMenus();
            this.menuList = this.commonService.getAllMenus();
        } */
    let permissionIds = [];
    data.map((val: any) => {
      if (this.menuList) {
        this.menuList.map((menu: any, index) => {
          if (menu.MenuID == val.MenuID) {
            if (menu.Child) {
              menu.Child = JSON.parse(menu.Child);
              // console.log('menu.Child', menu.Child);
              let childMenu = [];
              menu.Child.map((child: any, childIndex) => {
                child.showChildMenu = false;
                child.Child = [];
                const permissionIndex: number = data
                  .map((e) => e.MenuID)
                  .indexOf(child.MenuID);
                //console.log('permissionIndex data', permissionIndex);
                let ids = [];

                if (permissionIndex != -1) {
                  childMenu = data[permissionIndex];
                  ids = childMenu['PermissionTypeIDs'];
                  if (ids && ids.length) {
                    const isChildView = ids.includes(1);
                    if (!isChildView) {
                      menu.Child.splice(childIndex, 1);
                    }
                  }
                } else {
                  menu.Child.splice(childIndex, 1);
                }
              });
            } else {
              menu.Child = [];
            }
            if (menu.showChildMenu == 0) {
              menu.showChildMenu = false;
            }
            permissionIds = val.PermissionTypeIDs;

            if (permissionIds && permissionIds.length) {
              let isView = permissionIds.includes(1);
              if (!isView) {
                this.menuList.splice(index, 1);
              }
            }
          } else {
            const menuIndex: number = data
              .map((e) => e.MenuID)
              .indexOf(menu.MenuID);
            if (menuIndex == -1) {
              this.menuList.splice(index, 1);
            }
          }
        });
      }
    });
    // console.log("menu  list", this.menuList);
  }

  menudata(data) {
    this.commonService.setMenuValue(data);
  }

  ngAfterViewInit() {}

  public toggleSidenav() {
    this.isSidenavExpanded = !this.isSidenavExpanded;
  }

  ngOnDestroy() {
    this.allSubscribers.map((value) => value.unsubscribe());
  }
}
