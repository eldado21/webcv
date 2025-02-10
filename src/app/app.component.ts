import { Component, inject } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { ContentService } from './services/content.service';
import { Experience } from './interfaces/experience';
import { ExperienceComponent } from './experience/experience.component';
import { FormationComponent } from './formation/formation.component';
import { ProjectComponent } from './project/project.component';
import { CommonModule } from '@angular/common';
import { Formation } from './interfaces/formation';
import { Project } from './interfaces/project';
import { OwnerHeaderComponent } from "./owner-header/owner-header.component";
import { Owner } from './interfaces/owner';


@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    ExperienceComponent,
    FormationComponent,
    ProjectComponent,
    OwnerHeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  contentService: ContentService = inject(ContentService);

  owner!: Owner;
  experiences: Experience[] = [];
  formations: Formation[] = [];
  projects: Project[] = [];

  constructor() {
    this.contentService.getContent("owner")
      .then((owner: Owner) => this.owner = owner);

    this.contentService.getContent("experiences")
      .then((experiences: Experience[]) => this.experiences = experiences);

    this.contentService.getContent("formations")
      .then((formations: Formation[]) => this.formations = formations);

    this.contentService.getContent("projects")
      .then((projects: Project[]) => this.projects = projects);
  }
}
