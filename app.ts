import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count = signal(0); // ✅ using signal for reactivity

  handleCounter(action: string) {
    if (action === '-') {
      this.count.set(this.count() - 1);
    } else if (action === '+') {
      this.count.set(this.count() + 1);
    } else {
      this.count.set(0);
    }
  }
}
