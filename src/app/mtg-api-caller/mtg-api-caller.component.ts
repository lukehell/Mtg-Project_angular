import { Component, OnInit, Input } from '@angular/core';
import { My_Card } from '../card';
import { MtgCallerService } from '../mtg-caller.service';
import { InsertcardService } from '../insertcard.service';

@Component({
  selector: 'app-mtg-api-caller',
  templateUrl: './mtg-api-caller.component.html',
  styleUrls: ['./mtg-api-caller.component.css']
})
export class MtgApiCallerComponent implements OnInit {
  cards : My_Card[];
  message : string;
  @Input() parametro:Parameters;

  constructor(private mtgService: MtgCallerService, private insertService: InsertcardService) { 
    this.parametro = new Parameters();
  }

  ngOnInit() {
  }

  getCards(): void{
    this.mtgService.getCards(this.parametro.cardname.split('\n')).subscribe(cards => this.cards = cards);
  }

  insertCard(cardname: string, img_url: string):void{
    this.insertService.insertCard(cardname, img_url).subscribe(message => this.message = message);
  }
}

class Parameters {
  cardname: string;
}