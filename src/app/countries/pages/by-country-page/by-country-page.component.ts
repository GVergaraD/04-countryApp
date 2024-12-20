import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``,
})
export class ByCountryPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private CountriesService: CountriesService) {}

  searchByCountry(termino: string): void {
    this.isLoading = true;
    // console.log(termino);
    this.CountriesService.searchCountry(termino).subscribe((countries) => {
      this.isLoading = false;
      console.log(countries);
      this.countries = countries;
    });
  }

  ngOnInit(): void {
    this.countries = this.CountriesService.cacheStore.byCountries.countries;
    this.initialValue = this.CountriesService.cacheStore.byCountries.term;
  }
}
