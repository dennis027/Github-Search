import { SearchGithubService } from './../search-github.service';
import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';

import {User} from '../user'

@Component({
  selector: 'app-git-result',
  templateUrl: './git-result.component.html',
  styleUrls: ['./git-result.component.css']
})
export class GitResultComponent implements OnInit {

  user!: User;
  repoDetails!: [];
  searchGithubService : SearchGithubService;


  constructor(searchGithubService : SearchGithubService) {
    this.searchGithubService = searchGithubService;
   }

  ngOnInit() {
    this.user = this.searchGithubService.user;
    this.repoDetails = this.searchGithubService.repoData;
  }

}
