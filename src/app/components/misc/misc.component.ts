import { Component, Input } from '@angular/core';
import { Reading } from '../../interfaces/reading';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-misc',
  imports: [NgFor],
  templateUrl: './misc.component.html',
  styleUrl: './misc.component.css'
})

export class MiscComponent {
  @Input() readings!: Reading[];
}
