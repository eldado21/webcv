import { Component, Input, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-project',
  imports: [NgClass],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})

export class ProjectComponent {
  @Input() project!: Project;
  maximized: boolean = false;
  growthIcon = signal("fa-solid fa-maximize");

  toggleGrowth = (): void => {
    this.growthIcon.set(this.maximized ? "fa-solid fa-maximize" : "fa-solid fa-minimize");
    this.maximized = !this.maximized;
    console.log(this.growthIcon());
  }
}
