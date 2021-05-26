import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 userName: string;
 search: any;
 getSearch: any;
  constructor(private searchService: SearchService) {
    }
    
    userSubmit(){
      console.log(this.userName);
      this.searchService.getSearchData(this.userName).subscribe((search: any) => {
        console.log(search);
        this.search = search;
      });
  }


ngOnInit() {
  }
}
