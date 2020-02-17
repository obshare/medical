import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medicine } from '../Model/Medicine';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class MedicineshopService {
  public meds: Medicine[];
  public med: Medicine;
  public baseUrl: string;
  constructor(private readonly http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;

  }
  getAll(): Observable<any> {
    return this.http.get(this.baseUrl + 'api/Medicines/');
  }


  public getId(
    id: number
  ): Observable<any> {
    return this.http.get<Medicine>(this.baseUrl + 'api/Medicines/' + id);

  }

  public put(
    id: string,
    body: any
  ): Observable<any> {
    let endpointUri = `${this.baseUrl + 'api/Medicines/'}/${id}`;
    return this.http.put(endpointUri, body);
  }


  public post(
    med: any
  ): Observable<any> {
    let endpointUri = this.baseUrl + 'api/Medicines/';
    return this.http.post(endpointUri, med);

  }


  public deleteId(
    id: string
  ): Observable<any> {
    let endpointUri = this.baseUrl + 'api/Medicines/' + id;
    return this.http.delete(endpointUri)
  }
  private errorHandler(error: any) {
    return new error('');
  }

}
