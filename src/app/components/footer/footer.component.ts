import { Component, Input } from '@angular/core';
import { SocialUrl } from '../../interfaces/social-url';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input() socialUrls!: SocialUrl[]
  year: number = new Date().getFullYear();
}
