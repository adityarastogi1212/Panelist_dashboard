import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Panel } from './panel';

@Injectable({
  providedIn: 'root'
})
export class PanelService {
  private baseURL: string = "http://localhost:8080/all"
  constructor(private httpClient: HttpClient) { }

  getPanelsList(): Observable<Panel[]>{
    return this.httpClient.get<Panel[]>(this.baseURL);
  }
}
