import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  sidebarVisible = false

  constructor() {}

  ngOnInit(): void {}

  showSideBar() {
    this.sidebarVisible = true
  }

  hideSideBar() {
    this.sidebarVisible = false
  }
}
