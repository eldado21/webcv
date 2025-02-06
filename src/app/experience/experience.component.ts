import { Component, Input } from '@angular/core';
import { Experience } from '../interfaces/experience';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  template: `
  <section class="experience">
    <h2>{{experience.title}}</h2>
    <p>{{experience.location}}</p>
    <p>{{experience.startDate}} - {{experience.endDate}}</p>
    <p>{{experience.description}}</p>
  </section>
  `,
  styleUrl: './experience.component.css'
})


export class ExperienceComponent {
  @Input() experience!: Experience;
}
