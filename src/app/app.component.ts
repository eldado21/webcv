import { Component, inject } from '@angular/core';
import { ContentService } from './services/content.service';
import { Experience } from './interfaces/experience';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectComponent } from './components/project/project.component';
import { CommonModule } from '@angular/common';
import { Project } from './interfaces/project';
import { OwnerHeaderComponent } from "./components/owner-header/owner-header.component";
import { Owner } from './interfaces/owner';
import { SkillsComponent } from "./components/skills/skills.component";


@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    ExperienceComponent,
    ProjectComponent,
    OwnerHeaderComponent,
    SkillsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  contentService: ContentService = inject(ContentService);

  owner!: Owner;
  experiences: Experience[] = [];
  formations: Experience[] = [];
  projects: Project[] = [];

  constructor() {
    this.contentService.getContent("owner")
      .then((owner: Owner) => this.owner = owner);

    this.contentService.getContent("experiences")
      .then((experiences: Experience[]) => this.experiences = experiences);

    this.contentService.getContent("formations")
      .then((formations: Experience[]) => this.formations = formations);

    this.contentService.getContent("projects")
      .then((projects: Project[]) => this.projects = projects);
  }
}
