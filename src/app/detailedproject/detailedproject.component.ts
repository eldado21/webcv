import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Project } from '../interfaces/project';

@Component({
  selector: 'app-detailedproject',
  templateUrl: './detailedproject.component.html',
  styleUrl: './detailedproject.component.css'
})
export class DetailedProjectComponent {
  @Input() project!: Project;
  @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;

  open(): void {
    this.dialog.nativeElement.showModal();
  }

  close(): void {
    this.dialog.nativeElement.close();
  }

  // a click on the backdrop targets the <dialog> element itself, not its content
  onDialogClick(event: MouseEvent): void {
    if (event.target === this.dialog.nativeElement) {
      this.close();
    }
  }
}
