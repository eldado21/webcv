import { Component, Input } from '@angular/core';
import { Reading } from '../../interfaces/reading';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrl: './misc.component.css'
})

export class MiscComponent {
  @Input() readings!: Reading[];
}
