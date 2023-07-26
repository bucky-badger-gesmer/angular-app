import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template: `
    <main>
      <header class="block h-16 p-2.5 shadow-md">
        <img
          class="brand-logo"
          src="/assets/logo.svg"
          alt="logo"
          aria-hidden="true"
        />
      </header>
      <section class="p-2.5">
        <app-home></app-home>
      </section>
    </main>
  `,
})
export class AppComponent {
  title = 'homes';
}
