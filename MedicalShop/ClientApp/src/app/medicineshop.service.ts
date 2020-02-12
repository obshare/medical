import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medicine } from '../Model/Medicine';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MedicineshopService {
  public forecasts: Medicine[];
  public baseUrl: string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public getAll(
  ): Observable<any> {
    return this.http.get<any[]>(this.baseUrl + 'api/Medicines');
  }

  public getId(
    id: number
  ): Observable<Medicine> {

    return this.http.get<Medicine>(this.baseUrl + 'api/Medicines/' + id);
  }

  protected put(
    id: string,
    model: Medicine
  ): Observable<any> {
    return this.http.put<Medicine>(this.baseUrl + 'api/Medicines/' + id, model);
  }

  protected patch(
    path: string,
    body: any
  ): Observable<any> {
    let absolutePath = this.baseUrl + path;
    return this.http.patch(absolutePath, body);
  }

  protected post(
    path: string,
    body: any
  ): Observable<any> {
    let absolutePath = this.baseUrl + path;
    return this.http.post(absolutePath, body);
  }

  protected delete(
    path: string
  ): Observable<any> {
    let absolutePath = this.baseUrl + path;
    return this.http.delete(absolutePath);
  }

}
