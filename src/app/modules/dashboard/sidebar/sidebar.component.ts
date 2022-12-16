import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Icons } from 'app-types';

interface Section {
  title: string;
  link: string;
  iconName: Icons;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Output() closeBtnEvent = new EventEmitter()
  sections: Section[] = [
    {
      title: 'Search',
      link: 'search',
      iconName: 'search',
    },
    {
      title: 'Movies',
      link: 'movies',
      iconName: 'movie',
    },
    {
      title: 'Tv Shows',
      link: 'tvShows',
      iconName: 'tvShow',
    },
    {
      title: 'Categories',
      link: 'categories',
      iconName: 'category',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout() {
    localStorage.setItem('status', 'loggedOut');
    this.router.navigate(['account', 'signin']);
  }

  onClose() {
    this.closeBtnEvent.emit()
  }
}
