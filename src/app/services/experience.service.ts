import { Injectable } from '@angular/core';
import {Experience} from '../interfaces/experience'

@Injectable({
  providedIn: 'root'
})


export class ExperienceService {
  readonly url: string = "http://localhost:3000/experiences"

  async getAllExperiences(): Promise<Experience[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
}
