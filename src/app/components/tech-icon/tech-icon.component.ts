import { Component, HostBinding, Input } from '@angular/core';
import { Technology } from '../../interfaces/technology';

@Component({
  selector: 'app-tech-icon',
  templateUrl: './tech-icon.component.html',
  styleUrl: './tech-icon.component.css'
})

export class TechIconComponent {
  @Input() tech!: Technology;

  @HostBinding('style.color') get color(): string | null {
    return this.tech.iconColor ?? null;
  }

  get iconClass(): string {
    return this.tech.icon ?? `devicon-${this.tech.name.toLowerCase()}-plain colored`;
  }
}
