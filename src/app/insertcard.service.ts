import { Injectable, Inject } from '@angular/core';
import { My_Card } from './card';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { getBaseUrl } from 'src/main';



@Injectable({
  providedIn: 'root'
})



export class InsertcardService {

  insertCard(name : string, url : string): Observable<string>{
    var base_url = getBaseUrl();
    var loader = this.http.get<string>(base_url+'api/db/InsertCard/'+name+','+url);
    return loader
  }

  constructor(
    private http: HttpClient
  ) { }
}
