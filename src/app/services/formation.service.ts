import { Injectable } from '@angular/core';
import { Formation } from '../interfaces/formation';

@Injectable({
  providedIn: 'root'
})


export class FormationService {
readonly url: string = "http://localhost:3000/formations"

  async getAllFormations(): Promise<Formation[]> {
    const data = await fetch(this.url);
    console.log(data);
    return (await data.json()) ?? [];
  }
}
