import { Component } from '@angular/core';
import { DreamService } from './dream.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DreamService]
})
export class AppComponent {
  title = 'app works!';
}
