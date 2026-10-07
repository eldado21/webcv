import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Project } from '../../interfaces/project';
import { DetailedProjectComponent } from '../../detailedproject/detailedproject.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})

export class ProjectComponent {
  @Input() project!: Project;
  dialog: MatDialog = new MatDialog();

  openModal(): void {
    let refDialog = this.dialog.open(DetailedProjectComponent, {data: this.project});
  }
}
