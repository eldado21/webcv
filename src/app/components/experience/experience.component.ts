import { Component, Input } from '@angular/core';
import { Experience } from '../../interfaces/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html', 
  styleUrl: './experience.component.css'
})


export class ExperienceComponent {
  @Input() experience!: Experience;
}
