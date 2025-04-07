import { Component, Input } from '@angular/core';
import { Owner } from '../../interfaces/owner';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})


export class HeaderComponent {
  // https://codepen.io/msriki12/pen/yyBNMEr
  @Input() owner!: Owner;

  tilt(element: HTMLDivElement, event: MouseEvent) {
    const force: number = 16;

    const x: number = event.offsetX;
    const y: number = event.offsetY;
    const tiltX: number = (x - element.offsetWidth / 2) / force;
    const tiltY: number = -(y - element.offsetHeight / 2) / force;

    element.style.transform = `
    rotateX(${tiltY}deg)
    rotateY(${tiltX}deg)
    `;

    // element.style.setProperty("--gradient-opacity", pro);
  }

  reset(element: HTMLDivElement) {
    element.style.transform = `
    rotateX(0deg)
    rotateY(0deg)
    `;
  }
}
