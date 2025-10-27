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
  @Input() owner!: Owner;

}
