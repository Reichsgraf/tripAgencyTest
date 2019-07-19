import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  styleUrls: ['app-footer.component.scss'],
  templateUrl: 'app-footer.component.html'
})
export class AppFooterComponent {
  constructor() {}

  nothingToDo() {
    console.log('Nothing happen');
  }
}
