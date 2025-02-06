import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  readonly url: string = "http://localhost:3000/projects"

  async getAllProjects(): Promise<Project[]> {
    const data = await fetch(this.url);
    console.log(data);
    return (await data.json()) ?? [];
  }
}
