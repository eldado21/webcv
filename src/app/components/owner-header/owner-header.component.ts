import { Component, Input } from '@angular/core';
import { Owner } from '../../interfaces/owner';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-owner-header',
  imports: [CommonModule],
  templateUrl: './owner-header.component.html',
  styleUrl: './owner-header.component.css'
})


export class OwnerHeaderComponent {
  @Input() owner!: Owner;
}
