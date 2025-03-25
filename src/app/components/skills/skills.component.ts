import { Component, inject } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { Skills } from '../../interfaces/skills';
import { NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  contentService: ContentService = inject(ContentService);
  skills!: Skills;

  constructor() {
    this.contentService.getContent("skills")
      .then((skills: Skills) => this.skills = skills);
  }
}
