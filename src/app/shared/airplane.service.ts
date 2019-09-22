import { Injectable } from '@angular/core';
import { Airplane } from './airplane.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AirplaneService {
  formData: Airplane;
  readonly rootUrl = 'https://localhost:5001/api';
  list: Airplane[];

  constructor(private http: HttpClient) { }

  postAirplane() {
    return this.http.post(this.rootUrl + '/airplane', this.formData)
  }

  putAirplane() {
    return this.http.put(this.rootUrl + '/airplane/' + this.formData.Id, this.formData)
  }

  deleteAirplane(id) {
    return this.http.delete(this.rootUrl + '/airplane/' + id)
  }

  refreshList() {
    this.http.get(this.rootUrl + '/airplane')
      .toPromise()
      .then(res => this.list = res as Airplane[]);
  }
}
