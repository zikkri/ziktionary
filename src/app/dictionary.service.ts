import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en';
@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  constructor(private http: HttpClient) {}

  realData: any;

  getDefintion(val: any) {
    return this.http.get<any>(`${API_URL}/${val}`).pipe(
      map((res) => {
        // console.log(res);
        return res;
      })
    );
  }
}
