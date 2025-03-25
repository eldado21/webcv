import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ContentService {
  readonly baseUrl: string = "http://localhost:10000/"

  async getContent(endpoint: string): Promise<any> {
    const data = await fetch(this.baseUrl + endpoint);
    return (await data.json()) ?? [];
  }
}
