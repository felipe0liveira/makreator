import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  markdown: string;

  constructor() {
    this.markdown = localStorage.getItem('markdown') || '';
    window.addEventListener('beforeunload', function (e) {
      e.returnValue = '';
    });
  }

  markdownChange() {
    localStorage.setItem('markdown', this.markdown);
  }
}
