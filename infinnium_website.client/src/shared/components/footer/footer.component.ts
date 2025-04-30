/* eslint-disable @typescript-eslint/array-type */
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-footer',
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  showPopup = false;

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
    this.showPopup = true;
  }

  closePopup() {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    this.showPopup = false;
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
