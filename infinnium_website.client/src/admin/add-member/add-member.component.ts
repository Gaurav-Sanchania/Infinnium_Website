import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthorService } from '../../services/authorService.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-member',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css'],
})
export class AddMemberComponent implements OnInit {
  memberForm!: FormGroup;
  previewUrl: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder, private authorService: AuthorService) {}

  ngOnInit() {
    this.memberForm = this.fb.group({
      name: ['', Validators.required],
      designation: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      linkedin: [''],
      image: [null],
      description: ['', Validators.required],
    });
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      const file = input.files[0];
      this.memberForm.patchValue({
        image: file,
      });
      this.memberForm.get('image')?.updateValueAndValidity();

      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.memberForm.valid) {
      // Here you can process your form, e.g., send data to API
      // console.log('Form Submitted', this.memberForm.value);
      alert('Member added successfully!');
      
      const formValue = this.memberForm.value;
      console.log(formValue);
      const formData = {
        image: formValue.image,
        name: formValue.name,
        email: formValue.email,
        designation: formValue.designation,
        description: formValue.description,
        linkedin: formValue.linkedin,
      };
      console.log(formData);
      this.authorService.addAuthor(formData);
    } else {
      this.memberForm.markAllAsTouched();
    }
    this.memberForm.reset();
    this.previewUrl = null;
  }
}
