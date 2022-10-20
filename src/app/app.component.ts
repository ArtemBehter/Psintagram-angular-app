import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Psintagram-angular-app';
}

export interface DogHTTPResult {
  message: Record<string, string[]>;
  mesage: string[];
}
