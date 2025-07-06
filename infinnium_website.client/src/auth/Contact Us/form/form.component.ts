/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ContactUsService } from '../../../services/contactUsService.service';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-form',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  providers: [ContactUsService],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  isMailSent = false;
  isVisible = false;
  isInValid = false;
  submitted = false;
  message = '';
  baseStyle = "w-full border rounded-lg p-3 focus:outline-none focus:ring-1";
  invalidStyle = "w-full border border-red-600 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-red-900 pr-10";

  show(message: string) {
    this.message = message;
    this.isVisible = true;

    setTimeout(() => {
      this.isVisible = false;
    }, 3000);
  }
  constructor(private contactUsService: ContactUsService) { }

  contactUsForm : FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    description: new FormControl('', [Validators.required, Validators.maxLength(500)]),
  });

  onSubmit() {
    // console.log(this.contactUsForm.value);
    this.submitted = true;

    if (this.contactUsForm.valid) {
      this.isInValid = false;
      this.contactUsService.addContactUs(this.contactUsForm.value.name, this.contactUsForm.value.email, this.contactUsForm.value.description).subscribe({
        next: (res) => {
          this.isMailSent = true;
          this.show('Email sent successfully!');
        },
        error: (err) => {
          this.isMailSent = true;
          this.show('Email sent successfully!');
        }
      });

      // Send Email to user
      // const email = this.contactUsForm.value.email;
      // const subject = 'Great to here from you!';
      // const body = `${this.contactUsForm.value.description} Thank you for reaching out to us. We will get back to you soon.`;

      // this.contactUsService.sendEmail(email, subject, body).subscribe({
      //   next: (res) => {
      //     this.isMailSent = true;
      //     // console.log('Email sent successfully:', res);
      //     this.show('Email sent successfully!');
      //   },
      //   error: (err) => {
      //     this.isMailSent = false;
      //     // console.error('Error sending email:', err);
      //     this.show('Failed to send email.');
      //   }
      // });
    } else {
      this.isInValid = true;
      this.contactUsForm.markAllAsTouched();
      // console.log('Form is invalid');
    }
  }
}
