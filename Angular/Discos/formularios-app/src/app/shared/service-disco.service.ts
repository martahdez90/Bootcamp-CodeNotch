import { Injectable } from '@angular/core';
import { Disco } from "../models/disco";
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class DiscoService {
  private url = "http://localhost:3000/discos";
  public disco: Disco;
  constructor(private http: HttpClient) { }

  getDisco(id: number) {
    return this.http.get(this.url + "/" + id)
  }
  getDiscos() {
    return this.http.get(this.url)
  }
  postDisco(newDisco: Disco) {
    return this.http.post(this.url, newDisco)
  }
  putDisco(newDisco: Disco) {
    return this.http.put(this.url, newDisco)
  }
  /* deleteDisco(deleteDisco: Disco) {
    return this.http.delete(this.url, Disco)
  } */
  deleteDisco(id: number) {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        id: id,
      }
    }

    return this.http.delete(this.url, options)

  }


}