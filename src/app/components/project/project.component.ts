import { Component, Input } from '@angular/core';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() project!: Project;
}
