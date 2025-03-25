import { Component, Input } from '@angular/core';
import { Experience } from '../interfaces/experience';
import { CommonModule } from '@angular/common';
import { MapComponent } from "../map/map.component";


@Component({
  selector: 'app-formation',
  imports: [CommonModule, MapComponent],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css'
})


export class FormationComponent {
  @Input() formation!: Experience;
}
