import { Country } from '../../interfaces/country.interface';
import { CountriesService } from './../../services/countries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private CountriesService: CountriesService) {}

  searchByCapital(termino: string): void {
    this.isLoading = true;
    // console.log(termino);
    this.CountriesService.searchCapital(termino).subscribe((countries) => {
      this.isLoading = false;
      console.log(countries);
      this.countries = countries;
    });
  }

  ngOnInit(): void {
    this.countries = this.CountriesService.cacheStore.byCapital.countries;
    this.initialValue = this.CountriesService.cacheStore.byCapital.term;
  }
}
