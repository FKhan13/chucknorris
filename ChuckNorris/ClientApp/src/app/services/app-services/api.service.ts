import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {

  constructor(private http: HttpClient,
              @Inject("BASE_URL") private baseUrl: string) {
  }

  public GetCategories(): Observable<object> {
    return this.http.get(this.baseUrl + "chucknorris");
  }
}
