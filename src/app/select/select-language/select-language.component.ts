import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.less']
})
export class SelectLanguageComponent {

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ru']);
  }
  valueLanguage = 'Eng'

  changeLanguage(){
      if (this.valueLanguage === 'Eng') {
        this.translate.use('ru')
        this.valueLanguage = 'Rus'
      } else {
        this.translate.use('en')
        this.valueLanguage = 'Eng'
      }
  }
}
