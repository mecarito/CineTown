import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onSearch(value: string) {
    this.searchEvent.emit(value);
  }
}
