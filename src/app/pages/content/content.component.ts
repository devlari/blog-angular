import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockDataService } from 'src/app/service/news.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  idPage: number = 0;
  photoCover: string = '';
  contentTitle: string = '';
  contentText: string = '';

  constructor(
    private route: ActivatedRoute,
    private mockDataService: MockDataService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.idPage = value.get("id") as unknown as number
    )

    const data = this.mockDataService.getDetails(this.idPage);

    this.photoCover = data.photo;
    this.contentTitle = data.title;
    this.contentText = data.description;

  }

}

