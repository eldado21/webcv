import { Component, Input } from '@angular/core';
import { Experience } from '../interfaces/experience';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-formation',
  imports: [CommonModule],
  template: `
  <article class="formation">
    <h2>{{formation.title}}</h2>
    <p>{{formation.location}}</p>
    <p>{{formation.startDate}} - {{formation.endDate}}</p>
    <p>{{formation.description}}</p>
  </article>
  `,
  styleUrl: './formation.component.css'
})


export class FormationComponent {
  @Input() formation!: Experience;
}
