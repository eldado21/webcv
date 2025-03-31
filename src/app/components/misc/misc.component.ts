import { Component, inject } from '@angular/core';
import { Reading } from '../../interfaces/reading';
import { NgFor } from '@angular/common';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-misc',
  imports: [NgFor],
  templateUrl: './misc.component.html',
  styleUrl: './misc.component.css'
})

export class MiscComponent {
  readings!: Reading[];
  service: ContentService = inject(ContentService);

  constructor() {
    this.service.getContent("misc")
      .then((datas) => this.readings = datas.readings);
  }
}
