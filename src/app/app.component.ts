import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showContainerDisplay: boolean = false;
  containers: number = 0;

  onDateSelected(selectedDate: string) {
        this.containers = Math.floor(Math.random() * 10) + 1;

       this.showContainerDisplay = true;
  }
}
