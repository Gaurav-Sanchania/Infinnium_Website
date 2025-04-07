import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ContactUsService } from '../../../services/contactUsService.service';

@Component({
  standalone: true,
  selector: 'app-form',
  imports: [CommonModule, ReactiveFormsModule],
  providers: [ContactUsService],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  constructor(private contactUsService: ContactUsService) { }

  contactUsForm : FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    description: new FormControl('', [Validators.required, Validators.maxLength(500)]),
  });

  onSubmit() {
    // console.log(this.contactUsForm.value);

    if (this.contactUsForm.valid) {
      this.contactUsService.addContactUs(this.contactUsForm.value.name, this.contactUsForm.value.email, this.contactUsForm.value.description);

      // Send Email to user
      const email = this.contactUsForm.value.email;
      const subject = 'Great to here from you!';
      const body = 'Thank you for reaching out to us. We will get back to you soon.';

      this.contactUsService.sendEmail(email, subject, body);
    } else {
      console.log('Form is invalid');
    }
  }
}
