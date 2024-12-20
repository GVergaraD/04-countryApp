import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent implements OnInit {
  public countries: Country[] = [];
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  public activeRegion?: Region;
  public isLoading: boolean = false;

  constructor(private CountriesService: CountriesService) {}

  searchByRegion(termino: Region): void {
    this.isLoading = true;
    // console.log(termino);
    this.activeRegion = termino;
    this.CountriesService.searchRegion(termino).subscribe((countries) => {
      this.isLoading = false;
      console.log(countries);
      this.countries = countries;
    });
  }

  ngOnInit(): void {
    this.countries = this.CountriesService.cacheStore.byRegion.countries;
    this.activeRegion = this.CountriesService.cacheStore.byRegion.region;
  }
}
