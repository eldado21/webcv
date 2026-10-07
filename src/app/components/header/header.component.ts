import { Component, Input } from '@angular/core';
import { Owner } from '../../interfaces/owner';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})


export class HeaderComponent {
  @Input() owner!: Owner;

}
