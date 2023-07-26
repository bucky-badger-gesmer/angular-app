import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      <img
        class="h-[600px] w-full md:w-1/2 object-cover rounded-[30px] float-right"
        [src]="housingLocation?.photo"
        alt="Exterior photo of {{ housingLocation?.name }}"
      />
      <section class="listing-description">
        <h2 class="text-[48pt] font-bold mb-[15px]">
          {{ housingLocation?.name }}
        </h2>
        <p class="before:content-locationPin text-[24pt] mb-[15px]">
          {{ housingLocation?.city }}, {{ housingLocation?.state }}
        </p>
      </section>
      <section class="mb-[20px]">
        <h2 class="text-sky-500 text-[24pt] mb-[15px]">
          About this housing location
        </h2>
        <ul>
          <li>Units available: {{ housingLocation?.availableUnits }}</li>
          <li>Does this location have wifi: {{ housingLocation?.wifi }}</li>
          <li>
            Does this location have laundry: {{ housingLocation?.laundry }}
          </li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="text-[18pt] mb-[15px]">Apply now to live here</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label
            class="block text-sky-500 font-bold uppercase text-[12pt]"
            for="first-name"
            >First Name</label
          >
          <input
            class="block text-[16pt] mb-[15px] p-[10px] w-[400px] border-b-2"
            id="first-name"
            type="text"
            formControlName="firstName"
          />

          <label
            class="block text-sky-500 font-bold uppercase text-[12pt]"
            for="last-name"
            >Last Name</label
          >
          <input
            class="block text-[16pt] mb-[15px] p-[10px] w-[400px] border-b-2"
            id="last-name"
            type="text"
            formControlName="lastName"
          />

          <label
            class="block text-sky-500 font-bold uppercase text-[12pt]"
            for="email"
            >Email</label
          >
          <input
            class="block text-[16pt] mb-[15px] p-[10px] w-[400px] border-b-2"
            id="email"
            type="email"
            formControlName="email"
          />
          <button
            type="submit"
            class="bg-sky-500 text-white px-10 py-5 rounded-lg"
          >
            Apply now
          </button>
        </form>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation =
      this.housingService.getHousingLocationById(housingLocationId);
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
