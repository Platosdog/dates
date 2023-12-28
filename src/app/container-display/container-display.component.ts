import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container-display',
  templateUrl: './container-display.component.html',
  styleUrls: ['./container-display.component.css']
})
export class ContainerDisplayComponent {
  @Input() numberOfContainers: number = 0;
}
