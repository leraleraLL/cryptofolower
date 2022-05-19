import { ICryptoDataApiService } from './ICryptoDataApiService';
import { NamePopular, AllData } from './CryptoData';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const hostPopular = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

@Injectable()
export class CryptoDataApiService implements ICryptoDataApiService {
    constructor(private httpClient: HttpClient) {
    }

    getDataPopular(): Observable<AllData[]> {

        return   this.httpClient.get<NamePopular>(hostPopular).pipe(
                map(data => 
                    data = data.Data 
                ),
                map(data => 
                        data.map((obj: any, i: number) => {
                            return {
                                position: i + 1,
                                FullName: obj.CoinInfo.FullName,
                                Name: obj.CoinInfo.Name,
                                PRICE: obj.RAW.USD.PRICE,
                                MKTCAP: ((obj.RAW.USD.MKTCAP)/1e9).toFixed(2),
                                CHANGEPCT24HOUR: (obj.RAW.USD.CHANGEPCT24HOUR).toFixed(2)
                            }
                        })
                ),
                catchError(err => {
                    console.error('HTTP ERROR: ', err);
                    return throwError(() => new Error('test'));
                })
        )
        
    }
}
