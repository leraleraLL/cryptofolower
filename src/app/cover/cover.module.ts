import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {CoverComponent} from './cover.component';


@NgModule({
    imports: [
        CommonModule,
        TranslateModule
    ],
    declarations: [
        CoverComponent,
    ],
    exports: [
        CoverComponent
    ],
})
export class CoverModule { }