import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { CardTitleComponent } from "./components/card/card-title/card-title.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, CardTitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-pokedex';
}
