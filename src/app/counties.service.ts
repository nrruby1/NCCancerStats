import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * A service to talk to the node server and get queries.
 */
@Injectable({
  providedIn: 'root'
})
export class CountiesService {

  /**The location of the node server.*/
  uri='http://localhost:4000/countyCancer';

  constructor(private http: HttpClient) { }

  /**
   * Returns the data for a collection at an index.
   * @param index The index of the collection.
  */
  getCountyCancer(index: number) {
    return this.http.get(`${this.uri}/${index}`);
  }
}
