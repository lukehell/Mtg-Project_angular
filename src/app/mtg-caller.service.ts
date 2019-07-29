import { Injectable } from '@angular/core';
import { My_Card } from './card';
import { Observable, of, from } from 'rxjs';
import { Ruling, ForeignName, Legality, Card, RootObject } from './card_loader';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MtgCallerService {
  
  private mtgUrl = 'https://api.magicthegathering.io/v1/cards?';

  //getCard(name: string): Observable<Card>{
  //  return this.http.get<Card>(this.mtgUrl+name);
  //}
  //formato para a api:
  //mtgUrl+name1+|+name2+|+...

  getCards(names: string[]): Observable<My_Card[]>{
    var full_names = new String("");
    var my_cards_list: My_Card[];
    var aux_card = new My_Card();
    names.forEach(name => {
      full_names += name+"|";
      var json_loader = this.http.get<RootObject>(this.mtgUrl+full_names);
      json_loader.forEach(root =>{
        root.cards.forEach(card=>{
          aux_card.name = card.name;
          aux_card.cmc = card.cmc;
          aux_card.colors = card.colors;
          aux_card.printings = card.printings;
          aux_card.imageUrl = card.imageUrl;
        my_cards_list.push(aux_card);
        })
      })
      
    })
    return of(my_cards_list);
  }
  

  constructor(
    private http: HttpClient
  ) { }
}
