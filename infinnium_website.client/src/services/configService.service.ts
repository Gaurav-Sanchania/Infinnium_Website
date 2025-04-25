/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  get apiBaseUrl(): string {
    return (window as any)['myAppConfig']?.apiBaseUrl || '';
  }
}
