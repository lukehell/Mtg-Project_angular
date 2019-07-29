import { Component, OnInit, Input } from '@angular/core';
import { My_Card } from '../card';
import { MtgCallerService } from '../mtg-caller.service';


@Component({
  selector: 'app-mtg-api-caller',
  templateUrl: './mtg-api-caller.component.html',
  styleUrls: ['./mtg-api-caller.component.css']
})
export class MtgApiCallerComponent implements OnInit {
  cards : My_Card[];
  @Input() parametro:Parameters;

  constructor(private mtgService: MtgCallerService) { 
    this.parametro = new Parameters();
  }

  ngOnInit() {
  }

  getCards(): void{
    this.mtgService.getCards(this.parametro.cardname.split('\n')).subscribe(cards => this.cards = cards);
  }
}

class Parameters {
  cardname: string;
}