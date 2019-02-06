import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { MetaData } from '../../models/meta-data';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private seoService: SeoService
  ) { }

  ngOnInit() {

    this.seoService.getMeta('about').pipe(
      tap((tags: MetaData) => {
        this.seoService.updateTags({
          title: tags.title,
          description: tags.description,
          image: tags.image
        });
      })
    ).subscribe();

  }

}
