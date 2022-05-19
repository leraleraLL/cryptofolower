import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {SignUpComponent} from './sign-up.component';


@NgModule({
    imports: [
        CommonModule,
        TranslateModule
    ],
    declarations: [
        SignUpComponent,
    ],
    exports: [
        SignUpComponent
    ],
})
export class SignUpModule { }