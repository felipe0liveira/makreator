import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  markdown: string;

  constructor() {
    this.markdown = localStorage.getItem('markdown') || '';
    if (environment.production) {
      window.addEventListener('beforeunload', function (e) {
        e.returnValue = '';
      });
    }
  }

  markdownChange = () => localStorage.setItem('markdown', this.markdown);

  exportPDF() {
    if (this.markdown) {
      window.print();
    } else {
      alert('Seu arquivo está vazio, não é possível exportar!')
    }
  }
}
