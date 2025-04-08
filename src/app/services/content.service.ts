import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ContentService {
  readonly jsonFile: string = "/assets/db.json"

  async getContent(endpoint: string): Promise<any> {
    return await fetch(this.jsonFile)
      .then((res) => res.json())
      .then((json) => json[endpoint])
      .catch((_) => []);
  }
}
