import { Injectable } from '@angular/core';
import { bgImage, cardContent, pageTitle } from './mock';

@Injectable({
  providedIn: 'root'
})
export class FunboxService {

  constructor() { }

  public bgImage = bgImage;

  public pageTitle = pageTitle;

  public cardContent = cardContent;
}
