import { Component, inject } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { NgForOf } from '@angular/common';
import { Language } from '../../interfaces/language';
import { Technology } from '../../interfaces/technology';
import { SoftSkill } from '../../interfaces/soft-skill';

@Component({
  selector: 'app-skills',
  imports: [NgForOf],
  providers: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})

export class SkillsComponent {
  contentService: ContentService = inject(ContentService);
  languages!: Language[];
  techStack!: Technology[];
  softSkills!: SoftSkill[];

  constructor() {
    this.contentService.getContent("skills")
      .then((data) => {
        this.languages = data.languages;
        this.softSkills = data.softSkills;
        this.techStack = data.techStack;

        this.techStack.sort((t1, t2) => t2.iconSizeMult - t1.iconSizeMult);
      });

  }

  // returns a translation of the CEFR level to a percentage (ex: C2 = 100% of language knowledge)
  levelToPercent = (language: Language): number => {
    let threshold = 16.5

    switch (language.level.toLowerCase()) {
      case "a1":
        return threshold;
      case "a2":
        return 2 * threshold;
      case "b1":
        return 3 * threshold;
      case "b2":
        return 4 * threshold;
      case "c1":
        return 5 * threshold;
      case "c2":
        return 100.0;
      case "nat.":
        return 100.0;
      default:
        return 0.0;
    }
  }

}
