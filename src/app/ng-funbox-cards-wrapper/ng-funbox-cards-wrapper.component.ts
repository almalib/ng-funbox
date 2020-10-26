import { Component, OnInit } from '@angular/core';
import {FunboxService} from '../funbox.service';

@Component({
  selector: 'app-ng-funbox-cards-wrapper',
  templateUrl: './ng-funbox-cards-wrapper.component.html',
  styleUrls: ['./ng-funbox-cards-wrapper.component.scss']
})
export class NgFunboxCardsWrapperComponent implements OnInit {

  constructor(public funboxStore: FunboxService) { }

  ngOnInit(): void {
  }

  /**
   *
   */
  public getBgImage() {
    return this.funboxStore.bgImage;
  }

  /**
   *
   */
  public getPageTitle() {
    return this.funboxStore.pageTitle;
  }

  /**
   *
   */
  public getCardContent() {
    return this.funboxStore.cardContent;
  }

}
