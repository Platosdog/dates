import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.css']
})
export class DateSelectorComponent {
  selectedDate: string = '';
  @Output() dateSelected = new EventEmitter<string>();

  onDateSelected() {
    this.dateSelected.emit(this.selectedDate);
  }
}
