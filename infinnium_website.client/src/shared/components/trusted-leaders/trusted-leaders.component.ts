/* eslint-disable @typescript-eslint/no-inferrable-types */
import { NgStyle } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-trusted-leaders',
  imports: [NgStyle],
  templateUrl: './trusted-leaders.component.html',
  styleUrl: './trusted-leaders.component.css'
})
export class TrustedLeadersComponent implements OnChanges {
  @Input() bgColor: string = "#12423C";
  textColor: string = "white";

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['bgColor']) {
      this.textColor = this.bgColor === "#12423C" ? "white" : "black";
    }
  }
}
