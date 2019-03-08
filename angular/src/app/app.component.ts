import { 
  Component,
  OnInit,
} from '@angular/core';
import { StarWarsService } from './starwars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  people: any[];
  searchResult: any = [];
  search: string;

  constructor(private swService: StarWarsService) {}

  ngOnInit() {
    // this.swService.getPeople().subscribe(result => {
    //   this.people = result;
    //   console.log(this.people);
    // });
    this.getPeople();

  }

  getPeople() {
    let observable = this.swService.getPeople();
    observable.subscribe(data => {
      this.searchResult = data;
    });
  }

  getSpecific(search) {
    let observable = this.swService.getSpecific({search: search});
    observable.subscribe(result => {
      this.searchResult = result;
      console.log(this.searchResult)
    })
  }
}
