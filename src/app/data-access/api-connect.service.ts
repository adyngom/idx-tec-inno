import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MovieDetails, PageParams, Media } from '@aucine/data-types';
import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { ListParams } from '../data-types';
import { removeEmptyFields } from '../utils';

const PROXY_URL = 'https://api.z2h.ngrok.app';
const headers = new HttpHeaders().set('ngrok-skip-browser-warning', 'true')

@Injectable({
  providedIn: 'root',
})
export class ApiConnectService {

  constructor(private http: HttpClient) { }

  getCollection(payload?: ListParams): Observable<Media[]> {
    const params = new HttpParams({ fromObject: removeEmptyFields(payload) });
    const type = params.get('type');
    const collection = params.get('collection');
    return this.http.get<Media[]>(`${PROXY_URL}/api/collection/${type}/${collection}`, {
      headers: headers
    });
  }

  getPage<MovieDetails>(payload: PageParams): Observable<MovieDetails> {
    const params = new HttpParams({ fromObject: payload });
    const type = params.get('type');
    const id = params.get('id');
    return this.http.get<MovieDetails>(`${PROXY_URL}/api/${type}/${id}`, {
      headers: headers
    });
  }
}
