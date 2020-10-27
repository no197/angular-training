import { AuthorService } from './author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  number: number;
  authors: string[];

  constructor(service: AuthorService) {
    this.authors = service.getAuthors();
    this.number = this.authors.length;
   }

  ngOnInit(): void {
  }

}
