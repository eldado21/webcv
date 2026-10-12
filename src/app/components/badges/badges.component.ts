import { Component, Input } from '@angular/core';
import { Badge } from '../../interfaces/badge';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrl: './badges.component.css'
})

export class BadgesComponent {
  @Input() badges!: Badge[];
}
