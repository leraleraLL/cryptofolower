import { Observable } from 'rxjs';
import { AllData } from './CryptoData';
import { InjectionToken } from '@angular/core';

export const ICryptoDataApiServiceToken = new InjectionToken('ICryptoDataApiService');

export interface ICryptoDataApiService {
  getDataPopular(): Observable<AllData[]>
}