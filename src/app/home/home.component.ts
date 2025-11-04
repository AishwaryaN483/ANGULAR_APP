import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentService } from '../services/document.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedFiles: FileList | null = null;

  constructor(private documentService: DocumentService) {}

  onFileChange(event: any) {
    this.selectedFiles = event.target.files;
  }

  confirmUpload() {
    if (this.selectedFiles) {
      this.documentService.addFiles(this.selectedFiles);
      alert('Files confirmed and added to Documents page!');
      this.selectedFiles = null;
    } else {
      alert('Please select files first.');
    }
  }
}
