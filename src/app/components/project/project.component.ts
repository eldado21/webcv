import { Component, Input } from '@angular/core';
import { Project } from '../../interfaces/project';
import { DetailedProjectComponent } from '../../detailedproject/detailedproject.component';

@Component({
  selector: 'app-project',
  imports: [DetailedProjectComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})

export class ProjectComponent {
  @Input() project!: Project;
}
