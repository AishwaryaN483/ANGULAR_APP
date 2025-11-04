import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentService } from '../services/document.service';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  pdfFiles: File[] = [];
  docxFiles: File[] = [];
  pptxFiles: File[] = [];

  constructor(private documentService: DocumentService) {}

  ngOnInit() {
    const allFiles = this.documentService.getFiles();

    // Group files by extension
    this.pdfFiles = allFiles.filter(file => file.name.endsWith('.pdf'));
    this.docxFiles = allFiles.filter(file => file.name.endsWith('.docx') || file.name.endsWith('.doc'));
    this.pptxFiles = allFiles.filter(file => file.name.endsWith('.pptx') || file.name.endsWith('.ppt'));
  }
}
