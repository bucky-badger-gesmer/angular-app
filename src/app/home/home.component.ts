import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" class="border-solid border border-sky-500 p-2.5 rounded-lg mr-1 inline-block w-3/10">
        <button class="p-2.5 border-solid border border-sky-500 bg-sky-500 text-white rounded-lg" type="button">Search</button>
      </form>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
