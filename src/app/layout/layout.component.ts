import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
//import { CommonService, ErrorHandlingService } from '../shared/services';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, AfterViewInit, OnDestroy {
  menuList = [];
  constructor(
    public router: Router // private errorHandlingService: ErrorHandlingService
  ) // private commonService: CommonService,
  {}

  ngOnInit() {
    //this.commonService.setMenus();
  }

  ngAfterViewInit() {}

  ngOnDestroy() {}
}
