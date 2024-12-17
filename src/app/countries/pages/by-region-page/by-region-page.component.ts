import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  public countries: Country[] = [];

  constructor(private CountriesService: CountriesService) {}

  searchByRegion(termino: string): void {
    // console.log(termino);
    this.CountriesService.searchRegion(termino).subscribe((countries) => {
      console.log(countries);
      this.countries = countries;
    });
  }
}
