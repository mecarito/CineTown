import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Inputs } from 'app-types';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() variant!: Inputs;
  @Input() id!: string;
  @Input() valid!: boolean;
  @Output() textInputEvent = new EventEmitter<string>();
  @Output() passwordInputEvent = new EventEmitter<string>();
  visible = false;

  validInput =
    'w-64 md:w-96 py-2 px-4 h-12 ring-1 ring-gray-300 focus:ring-theme-black text-theme-black bg-white rounded-lg text-base';
  invalidInput =
    'w-64 md:w-96 py-2 px-4 h-12 ring-1 ring-theme-red text-theme-black bg-white rounded-lg text-base';

  validPassword =
    'w-64 md:w-96 py-2 px-4 h-12 ring-1 focus-within:ring-2 ring-gray-300 focus-within:ring-theme-black text-theme-black bg-white rounded-lg text-base flex flex-row space-x-2 items-center';
  invalidPassword =
    'w-64 md:w-96 py-2 px-4 h-12 ring-1 focus-within:ring-2 ring-theme-red focus-within:ring-theme-black text-theme-black bg-white rounded-lg text-base flex flex-row space-x-2 items-center';

  constructor() {}

  ngOnInit(): void {
    this.valid = true;
  }

  onTextChange(value: string) {
    this.textInputEvent.emit(value);
  }

  onPasswordChange(value: string) {
    this.passwordInputEvent.emit(value);
  }

  showPassword() {
    this.visible = true;
  }

  hidePassword() {
    this.visible = false;
  }
}
