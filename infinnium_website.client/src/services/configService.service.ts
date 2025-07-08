import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { environment } from '../environments/environment';

export interface AppConfig {
  apiBaseUrl: string;
}

declare global {
  interface Window {
    myAppConfig: AppConfig;
  }
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private configSubject = new BehaviorSubject<AppConfig | null>(null);
  public config$ = this.configSubject.asObservable();

  private readonly CONFIG_URL = './assets/myConfig.js';
  // environment.ts
  public enApiUrl = "";

  constructor(private http: HttpClient) {
    if(environment.production) {
      this.enApiUrl = `${window.location.origin}`;
    } else {
      this.enApiUrl = environment.base_api_Url;
    }
  }

  loadConfig(): Observable<AppConfig> {
    return this.http.get(this.CONFIG_URL, { responseType: 'text' }).pipe(
      map((configText) => {
        // Remove the window assignment part and extract the config object
        const configJson = configText
          .replace("window['apiEndpointUrl'] = ", '')
          .trim();
        // Remove any trailing semicolons
        const cleanConfigJson = configJson.replace(/;$/, '');
        // Parse the JSON
        const config = JSON.parse(cleanConfigJson);
        return config as AppConfig;
      }),
      tap((config) => {
        // Update the global config
        window.myAppConfig = config;
        // Update the behavior subject
        this.configSubject.next(config);
      })
    );
  }

  getConfig() {
    if (this.configSubject.value) {
      return this.config$;
    } else {
      return this.loadConfig();
    }
  }

  refreshConfig(): Observable<AppConfig> {
    return this.loadConfig();
  }

  get apiBaseUrl(): string {
    return window.myAppConfig?.apiBaseUrl || '';
  }

  // for environment.ts config
  getApiUrl(): string {
    return this.enApiUrl;
  }
}
