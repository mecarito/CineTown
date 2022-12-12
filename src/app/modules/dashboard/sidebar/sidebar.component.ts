import { Component, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {}
}
