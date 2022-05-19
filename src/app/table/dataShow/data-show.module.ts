import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataShowComponent} from './data-show.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    DataShowComponent,
  ],
  exports: [
    DataShowComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  providers: [],
})
export class DataShowModule {
}