import { Component, OnInit } from '@angular/core';
import { DictionaryService } from './dictionary.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ziktionary';
  data: any;
  found: Boolean = false;

  constructor(private dicService: DictionaryService) {}

  ngOnInit(): void {}

  getDefinition(val: any) {
    const searchedWord = Object.values(val);
    this.data = this.dicService.getDefintion(searchedWord).subscribe((data) => {
      // console.log(data);
      this.data = data;
      this.found = true;
      // console.log(this.data);
    });
    // console.log(this.data);
  }
}
