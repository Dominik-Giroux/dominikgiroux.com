import { Component, OnInit } from '@angular/core';
import { SeoService } from '../..//services/seo.service';
import { MetaData } from '../../models/meta-data';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(
    private seoService: SeoService
  ) { }

  ngOnInit() {

    this.seoService.getMeta('services').pipe(
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
