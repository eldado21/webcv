import { Component, Input } from '@angular/core';
import { Experience } from '../../interfaces/experience';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-formation',
  imports: [CommonModule],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css'
})


export class FormationComponent {
  @Input() formation!: Experience;

  ngOnInit() {
    console.log(this.formation);
    
  }
}
