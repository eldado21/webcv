import { Component, Inject } from '@angular/core';
import { Project } from '../interfaces/project';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-detailedproject',
  imports: [NgFor],
  templateUrl: './detailedproject.component.html',
  styleUrl: './detailedproject.component.css'
})
export class DetailedProjectComponent {
  project: Project;
  dialogRef: MatDialogRef<DetailedProjectComponent>;


  constructor(@Inject(MAT_DIALOG_DATA) project: Project, dialogRef: MatDialogRef<DetailedProjectComponent>){
    this.project = project;
    this.dialogRef = dialogRef;

    console.log(project.techStack)

    for (let tech in project.techStack) {
      console.log(tech);
    }
    
    
  }
}
