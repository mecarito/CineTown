import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Buttons } from 'app-types';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() variant!: Buttons;
  @Input() label!: string;
  @Output() ClickEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.ClickEvent.emit();
  }
}
