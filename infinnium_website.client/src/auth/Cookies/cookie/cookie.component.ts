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

  acceptAll() {
    this.closePopup();
  }

  reject() {
    this.closePopup();
    setTimeout(() => {
      localStorage.removeItem('sessionId');
      document.cookie =
        'sessionId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }, 500);
  }

  customize() {
    this.showCookieSettingsPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    this.showCookieSettingsPopup = false;
  }

  ngOnInit() {
    let sessionId = localStorage.getItem('sessionId');
    //console.log(sessionId);

    if (!sessionId) {
      // If not found in localStorage, check the cookie
      sessionId = this.getCookie('sessionId');
      // console.log('Session ID from cookie:', sessionId);

      if (!sessionId) {
        this.showPopup = true;
        // If not found in cookie, generate a new session ID
        sessionId = this.generateSessionId();
        // Store the session ID in both localStorage and cookie
        localStorage.setItem('sessionId', sessionId);
        this.setCookie('sessionId', sessionId);
      } else {
        this.showPopup = false;
      }
    } else {
      this.showPopup = false;
    }
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

  manageSession(cookieName: string = 'sessionId'): string {
    let sessionId = localStorage.getItem(cookieName);

    if (!sessionId) {
      // If not found in localStorage, check the cookie
      sessionId = this.getCookie(cookieName);
      // console.log('Session ID from cookie:', sessionId);
      console.log(document.cookie);

      if (!sessionId) {
        // If not found in cookie, generate a new session ID
        sessionId = this.generateSessionId();
        // Store the session ID in both localStorage and cookie
        localStorage.setItem(cookieName, sessionId);
        this.setCookie(cookieName, sessionId);
      }
    }
    return sessionId;
  }

  settings = {
    necessary: true,
    preferences: false,
    statistics: false,
  };

  // Explicitly typed array to avoid TS errors in template
  settingKeys: Array<Exclude<keyof typeof this.settings, 'necessary'>> = [
    'preferences',
    'statistics',
  ];

  openPopup() {
    // document.body.style.overflow = 'hidden';
    // document.documentElement.style.overflow = 'hidden';
    this.showPopup = true;
  }

  toggleSetting(key: keyof typeof this.settings) {
    if (key !== 'necessary') {
      this.settings[key] = !this.settings[key];
    }
  }

  saveSettings() {
    // console.log('Saved Settings:', this.settings);
    this.closePopup();
  }
}
