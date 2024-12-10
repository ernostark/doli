import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpComponent } from "./components/emp/emp.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'doli';
}
