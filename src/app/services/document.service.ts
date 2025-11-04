import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private uploadedFiles: File[] = [];

  addFiles(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.uploadedFiles.push(files[i]);
    }
  }

  getFiles() {
    return this.uploadedFiles;
  }

  clearFiles() {
    this.uploadedFiles = [];
  }
}
