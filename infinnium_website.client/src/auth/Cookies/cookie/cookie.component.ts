/* eslint-disable @typescript-eslint/array-type */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-cookie',
  imports: [CommonModule, RouterLink],
  templateUrl: './cookie.component.html',
  styleUrl: './cookie.component.css',
})
export class CookieComponent implements OnInit {
  showPopup = true;
  showCookieSettingsPopup = false;

  settings = {
    necessary: true,
    preferences: false,
    statistics: false,
  };

  settingKeys: Array<Exclude<keyof typeof this.settings, 'necessary'>> = [
    'preferences',
    'statistics',
  ];

  ngOnInit() {
    const savedSettings = localStorage.getItem('cookieSettings');
    if (savedSettings) {
      this.settings = { ...this.settings, ...JSON.parse(savedSettings) };
    }

    let sessionId = localStorage.getItem('sessionId') || this.getCookie('sessionId');

    if (!sessionId) {
      this.showPopup = true;
      sessionId = this.generateSessionId();
      localStorage.setItem('sessionId', sessionId);
      this.setCookie('sessionId', sessionId);
    } else {
      this.showPopup = false;
    }
  }

  acceptAll() {
    this.settings.preferences = true;
    this.settings.statistics = true;
    this.saveSettings();
  }

  reject() {
    this.settings.preferences = false;
    this.settings.statistics = false;
    this.saveSettings();

    setTimeout(() => {
      localStorage.removeItem('sessionId');
      this.deleteCookie('sessionId');
    }, 500);
  }

  customize() {
    this.showCookieSettingsPopup = true;
  }

  closePopupUsingCross() {
    setTimeout(() => {
      localStorage.removeItem('sessionId');
      this.deleteCookie('sessionId');
    }, 500);

    this.showPopup = false;
    this.showCookieSettingsPopup = false;
  }

  closePopup() {
    this.showPopup = false;
    this.showCookieSettingsPopup = false;
  }

  openPopup() {
    this.showPopup = true;
  }

  toggleSetting(key: keyof typeof this.settings) {
    if (key !== 'necessary') {
      this.settings[key] = !this.settings[key];
    }
  }

  saveSettings() {
    localStorage.setItem('cookieSettings', JSON.stringify(this.settings));
    this.closePopup();
  }

  generateSessionId(): string {
    const randomPart = crypto.getRandomValues(new Uint32Array(4)).join('-');
    const timestamp = Date.now().toString(36);
    return `${timestamp}-${randomPart}`;
  }

  setCookie(name: string, value: string, days: number = 1): void {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/;Secure;SameSite=Strict`;
  }

  getCookie(name: string): string | null {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let c of ca) {
      while (c.charAt(0) === ' ') c = c.substring(1);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
    }
    return null;
  }

  deleteCookie(name: string) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

  manageSession(cookieName: string = 'sessionId'): string {
    let sessionId = localStorage.getItem(cookieName);

    if (!sessionId) {
      sessionId = this.getCookie(cookieName);
      if (!sessionId) {
        sessionId = this.generateSessionId();
        localStorage.setItem(cookieName, sessionId);
        this.setCookie(cookieName, sessionId);
      }
    }
    return sessionId;
  }
}
