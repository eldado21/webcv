import { Component, inject } from '@angular/core';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  contentService: ContentService = inject(ContentService);
  


  // this.contentService.getContent("skill")
  //       .then((owner: Owner) => this.owner = owner);

}
