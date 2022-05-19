import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableCryptoComponent} from './table-crypto.component';
import {MatTableModule} from '@angular/material/table'
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ICryptoDataApiServiceToken} from '../../../shared/ICryptoDataApiService';
import {CryptoDataApiService} from '../../../shared/CryptoData.service';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    TableCryptoComponent,
  ],
  exports: [
    TableCryptoComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    TranslateModule
  ],
  providers: [
    {provide: ICryptoDataApiServiceToken, useClass: CryptoDataApiService},
  ]
})
export class TableModule {
}