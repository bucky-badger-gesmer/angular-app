import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-sky-100 rounded-3xl pb-8">
      <img
        class="h-64 w-full object-cover rounded-t-3xl"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
      />
      <h2 class="text-2xl font-bold text-sky-500 pt-2.5 pb-0 px-5">
        {{ housingLocation.name }}
      </h2>
      <p class="pt-2.5 pb-10 px-10 before:content-locationPin">
        {{ housingLocation.city }}, {{ housingLocation.state }}
      </p>
    </section>
  `,
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
