import { Country } from '../../interfaces/country';
import { CountriesService } from './../../services/countries.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor(private CountriesService: CountriesService) {}

  searchByCapital(termino: string): void {
    // console.log(termino);
    this.CountriesService.searchCapital(termino).subscribe((countries) => {
      console.log(countries);
      this.countries = countries;
    });
  }
}
