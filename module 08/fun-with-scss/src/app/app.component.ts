import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myTheme = 'blue-theme';

  toggleTheme() {
    this.myTheme = (this.myTheme === 'green-theme') ? 'blue-theme' : 'green-theme';
  }
}
