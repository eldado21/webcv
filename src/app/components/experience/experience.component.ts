import { Component, Input } from '@angular/core';
import { Experience } from '../../interfaces/experience';
import { CommonModule } from '@angular/common';
import { MapComponent } from "../map/map.component";


@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html', 
  styleUrl: './experience.component.css'
})


export class ExperienceComponent {
  @Input() experience!: Experience;
}
