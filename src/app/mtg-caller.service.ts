import { Injectable } from '@angular/core';
import { My_Card } from './card';
import { Observable, of, from } from 'rxjs';
import { Ruling, ForeignName, Legality, Card, RootObject } from './card_loader';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MtgCallerService {
  configs: RootObject;
  private mtgUrl = 'https://api.magicthegathering.io/v1/cards?name=';

  //getCard(name: string): Observable<Card>{
  //  return this.http.get<Card>(this.mtgUrl+name);
  //}
  //formato para a api:
  //mtgUrl+name1+|+name2+|+...

  getCards(names: string[]): Observable<My_Card[]>{
    var full_names = new String("");
    var my_cards_list: My_Card[] = [];
    
    //Forma funcional, mas não otimizada.
    names.forEach(name => {
      //full_names += name+"|";
      var json_loader = this.http.get<RootObject>(this.mtgUrl+name).subscribe(
        (ro:RootObject) => {
          var aux_card: My_Card = new My_Card();
          aux_card.name = ro.cards[0].name;
          aux_card.cmc = ro.cards[0].cmc;
          aux_card.colors = ro.cards[0].colors;
          aux_card.imageUrl = ro.cards[0].imageUrl;
          aux_card.printings = ro.cards[0].printings;
          my_cards_list.push(aux_card);
        }
      )
    })

    /*
    var json_loader = this.http.get<RootObject>(this.mtgUrl+full_names).subscribe(
      (ro:RootObject) => {
        ro.cards.forEach(card =>
        {
          var aux_card: My_Card = new My_Card();
          aux_card.name = card.name;
          aux_card.cmc = card.cmc;
          aux_card.colors = card.colors;
          aux_card.printings = card.printings;
          aux_card.imageUrl = card.imageUrl;
          my_cards_list.push(aux_card);
        })
      }
    );
    */
    return of(my_cards_list);
  }
  

  constructor(
    private http: HttpClient
  ) { }
}
