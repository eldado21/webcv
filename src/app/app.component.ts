import { Component, inject } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { ExperienceService } from './services/experience.service';
import { Experience } from './interfaces/experience';
import { ExperienceComponent } from './experience/experience.component';
import { FormationComponent } from './formation/formation.component';
import { ProjectComponent } from './project/project.component';
import { CommonModule } from '@angular/common';
import { Formation } from './interfaces/formation';
import { Project } from './interfaces/project';
import { FormationService } from './services/formation.service';
import { ProjectService } from './services/project.service';


@Component({
  selector: 'app-root',

  imports: [CommonModule, ExperienceComponent, FormationComponent, ProjectComponent],
  template: `
  <header>
    <img src="" alt="">
    <h1>\< Damian Boquete Costa \></h1>
    <div>
      <p>somewhere</p>
      <p>linkedin</p>
      <p>github</p>
      <p>email</p>
      <p>tel</p>
    </div>
  </header>
  <body>
    <section>
      <h1>Formations</h1>
      <app-formation
      *ngFor="let formation of formations"
      [formation]="formation"
      ></app-formation>
    </section>
    <section>
      <h1>Experiences</h1>
      <app-experience
      *ngFor="let experience of experiences"
      [experience]="experience"
      ></app-experience>
    </section>
    <section>
      <h1>Projects</h1>
      <app-project
      *ngFor="let project of projects"
      [project]="project"
      ></app-project>
    </section>
  </body>
  <footer>
    <h1>\< / \></h1>
  </footer>
  `,
  styleUrl: './app.component.css'
})


export class AppComponent {
  experienceService: ExperienceService = inject(ExperienceService);
  formationService: FormationService = inject(FormationService);
  projectService: ProjectService = inject(ProjectService);

  experiences: Experience[] = [];
  formations: Formation[] = [];
  projects: Project[] = [];

  constructor() {
    this.experienceService.getAllExperiences()
      .then((experiences: Experience[]) => this.experiences = experiences);

    this.formationService.getAllFormations()
      .then((formations: Formation[]) => this.formations = formations);

    this.projectService.getAllProjects()
      .then((projects: Project[]) => this.projects = projects);

      console.log(this.projects);
  }
}
