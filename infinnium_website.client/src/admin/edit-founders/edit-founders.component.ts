/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthorService } from '../../services/authorService.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QuillModule } from 'ngx-quill';

@Component({
  standalone: true,
  selector: 'app-edit-founders',
  imports: [NavbarComponent, FooterComponent, CommonModule, ReactiveFormsModule, QuillModule],
  providers:[AuthorService],
  templateUrl: './edit-founders.component.html',
  styleUrl: './edit-founders.component.css'
})
export class EditFoundersComponent implements OnInit {
  memberForm!: FormGroup;
  previewUrl: string | ArrayBuffer | null = null;
  originalFile: File | null = null;
  showPopup = false;
  authorId: any ="";

  constructor(private fb: FormBuilder, private authorService: AuthorService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.memberForm = this.fb.group({
      image: [null, Validators.required],
      name: ['', Validators.required],
      designation: ['', Validators.required],
      email: ['', [Validators.email]],
      description: ['', Validators.required],
      linkedin: [''],
    });

    this.authorId = this.route.snapshot.paramMap.get('guid');
    
    if(this.authorId) {
      this.authorService.getAuthorDetails(this.authorId).then((author) => {
        this.memberForm.patchValue({
          image: author.image,
          name: author.name,
          designation: author.designation,
          email: author.email,
          description: author.description,
          linkedin: author.socialMediaLink,
        });
        this.previewUrl = author.image;
      })
    }
  }

  onFileChange(event: any) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.originalFile = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file);

      this.memberForm.patchValue({
        image: file 
      });
      this.memberForm.get('image')?.markAsTouched();
    }
  }

  onSubmit() {
    const formValue = this.memberForm.value;

    const member = {
      image: formValue.image,
      name: formValue.name,
      email: formValue.email,
      designation: formValue.designation,
      description: formValue.description,
      linkedin: formValue.linkedin,
      id: this.authorId,
    };

    if(this.memberForm.valid) {
      //console.log(member);
      this.authorService.editAuthorDetails(member);
      //console.log("onSubmit - service method call");
      this.showPopup = true;
    } else {
      this.memberForm.markAllAsTouched();
    }
  }

  closePopup(): void {
    this.showPopup = false;
    this.router.navigateByUrl(`/Dashboard`);
  }
}
