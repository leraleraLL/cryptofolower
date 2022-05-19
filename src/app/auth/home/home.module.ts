import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {CoverModule} from '../../cover/cover.module';
import {DataShowModule} from '../../table/dataShow/data-show.module';
import {TableModule} from '../../table/table-crypto/table-crypto.module';
// import {LoginModule} from '../login/login.module';
// import {SignUpModule} from '../login/login.module';

@NgModule({
    declarations: [
        HomeComponent,
      ],
      exports: [
        HomeComponent
      ],
    imports: [
        CoverModule,
        CommonModule,
        DataShowModule,
        TableModule
        // LoginModule,
        // SignUpModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {}