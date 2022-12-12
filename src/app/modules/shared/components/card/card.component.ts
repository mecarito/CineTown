import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cards, Movie, TvShow } from 'app-types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() variant!: Cards;
  @Input() movie!: Movie;
  @Input() tvShow!: TvShow;
  @Output() clickEvent = new EventEmitter<string>();

  url =
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=224&q=80';

  constructor() {}

  ngOnInit(): void {}

  getItemId() {
    this.clickEvent.emit();
  }
}
