import { Component } from '@angular/core';
import { SuperHero } from './super-hero';
import { SuperHeroService } from './super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SuperHero.UI';
}
