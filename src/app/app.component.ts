import { Component, inject } from '@angular/core';
import { ContentService } from './services/content.service';
import { Experience } from './interfaces/experience';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectComponent } from './components/project/project.component';
import { CommonModule } from '@angular/common';
import { Project } from './interfaces/project';
import { HeaderComponent } from "./components/header/header.component";
import { Owner } from './interfaces/owner';
import { SkillsComponent } from "./components/skills/skills.component";
import { MiscComponent } from "./components/misc/misc.component";
import { SocialUrl } from './interfaces/social-url';
import { Reading } from './interfaces/reading';
import { FooterComponent } from "./components/footer/footer.component";


@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    ExperienceComponent,
    ProjectComponent,
    HeaderComponent,
    SkillsComponent,
    MiscComponent,
    FooterComponent
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
  socialUrls: SocialUrl[] = [];
  readings: Reading[] = [];

  constructor() {
    this.contentService.getContent("owner")
      .then((owner: Owner) => this.owner = owner);

    this.contentService.getContent("experiences")
      .then((experiences: Experience[]) => this.experiences = experiences);

    this.contentService.getContent("formations")
      .then((formations: Experience[]) => this.formations = formations);

    this.contentService.getContent("projects")
      .then((projects: Project[]) => this.projects = projects);

    this.contentService.getContent("socialUrls")
      .then((socialUrls: SocialUrl[]) => this.socialUrls = socialUrls);

    this.contentService.getContent("readings")
      .then((readings: Reading[]) => this.readings = readings);
  }
}
