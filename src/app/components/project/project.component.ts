import { Component, Input } from '@angular/core';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-project',
  imports: [],
  template: `
    <section class="formation">
    <h2>{{project.title}}</h2>
    <p>{{project.creationDate}}</p>
    <p>{{project.description}}</p>
    <p>{{project.images}}</p>
  </section>`,
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() project!: Project;
}
