/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContactUsService } from '../../services/contactUsService.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-contact-us',
  imports: [CommonModule, FormsModule],
  providers: [ContactUsService],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements OnInit {
  contactRecords: any = [];
  showEditPopup = false;
  recordEdit: any = [];

  constructor(private contactUsService: ContactUsService) { }

  async ngOnInit() {
    this.contactRecords = await this.contactUsService.getAllContactUs();
  }

  editStatus() {
    this.contactUsService.updateContactUs(this.recordEdit);
    // console.log(this.recordEdit);
    this.showEditPopup = false;
  }

  openPopUp(record: any) {
    this.showEditPopup = true;
    this.recordEdit = record;
    console.log(this.recordEdit);
  }
}
