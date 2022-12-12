import { Component, Input, OnInit } from '@angular/core';
import { Inputs } from 'app-types';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() variant!: Inputs;
  @Input() id!: string;
  visible = false;

  constructor() {}

  ngOnInit(): void {}

  showPassword() {
    this.visible = true
  }

  hidePassword() {
    this.visible = false
  }
}
