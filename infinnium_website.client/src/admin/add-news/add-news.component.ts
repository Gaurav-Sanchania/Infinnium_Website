/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NewsService } from '../../services/newsService.service';

@Component({
  selector: 'app-add-news',
  imports: [NavbarComponent, FooterComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './add-news.component.html',
  styleUrl: './add-news.component.css'
})
export class AddNewsComponent implements OnInit {
  blogForm!: FormGroup;
  showPopup = false;

  constructor(private fb: FormBuilder, private newsService: NewsService) { }

  ngOnInit(): void {
    this.blogForm = this.fb.group({
      image: [null, Validators.required],
      title: ['', [Validators.required, Validators.maxLength(100)]],
      brief: ['', [Validators.required, Validators.maxLength(150)]],
      description: ['', Validators.required],
      publishedDate: ['', Validators.required],
    });
  }

  onFileChange(event: any) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.blogForm.patchValue({ image: file });
      this.blogForm.get('image')?.markAsTouched();
    }
  }

  onSubmit(): void {
    const formValue = this.blogForm.value;

    const blog = {
      image: formValue.image,
      title: formValue.title,
      brief: formValue.brief,
      description: formValue.description,
      publishedDate: formValue.publishedDate,
      authorId: 1
    };

    if (this.blogForm.valid) {
      //console.log(this.blogForm.value);
      this.newsService.addNewsAndEvents(blog);
      this.showPopup = true;
      this.blogForm.reset();
    } else {
      this.blogForm.markAllAsTouched();
    }
  }

  closePopup(): void {
    this.showPopup = false;
  }
}
