import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SelectLanguageComponent} from './select-language.component';


@NgModule({
  declarations: [
    SelectLanguageComponent,
  ],
  exports: [
    SelectLanguageComponent
  ],
  imports: [
    CommonModule,


  ],
  providers: [],

})
export class SelectLanguageModule {
}