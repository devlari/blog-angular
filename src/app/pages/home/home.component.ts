import { Component, OnInit } from '@angular/core';
import { MockDataService } from 'src/app/service/news.service';
import { news } from 'src/app/types/news';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.responsive.component.css']
})
export class HomeComponent implements OnInit {
  news: news = [];

  constructor(private mockDataService: MockDataService) { }

  ngOnInit(): void {
    this.news = this.mockDataService.getMockData();
  }

}
