import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthorService } from '../../services/authorService.service';

@Component({
  standalone: true,
  selector: 'app-add-image',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-image.component.html',
  styleUrl: './add-image.component.css',
})
export class AddImageComponent {
  imageForm: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private authorService: AuthorService) {
    this.imageForm = this.fb.group({});
  }

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];
    }
  }

  onSubmit(): void {
    if (this.selectedFile) {
      const imagePayload = { image: this.selectedFile };
      this.authorService.addImagesInAuthor(imagePayload).subscribe({
        next: () => {
          alert('Image uploaded successfully');
          this.selectedFile = null;
        },
        error: (err) => {
          console.error('Upload failed', err);
          alert('Upload failed');
        },
      });
    }
  }
}
