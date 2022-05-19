import { Inject, Injectable } from "@angular/core";
import { map, Observable, Subscription, switchMap } from "rxjs";
import { AllData } from "./CryptoData";
import { ICryptoDataApiService, ICryptoDataApiServiceToken } from './ICryptoDataApiService';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    private _CryptoData: AllData[] = [];
    private _numsElems = 0;
    private _summaryMarketCap = 0;
    private _summaryVolum = 0;
    private _nameRow = 'this._cryptoData[0].name'
   
    constructor(
        @Inject(ICryptoDataApiServiceToken)
        private CryptoDataApiService: ICryptoDataApiService
    ) {}

    DataPopular() {
        return this.CryptoDataApiService.getDataPopular()
    }
}