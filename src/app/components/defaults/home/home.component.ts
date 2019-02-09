import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../../services/seo.service';
import { MetaData } from '../../../models/meta-data';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private seoService: SeoService
  ) { }

  age: number;
  email: string;
  phone: string;

  ngOnInit() {

    this.seoService.getMeta('home').pipe(
      tap((tags: MetaData) => {
        this.seoService.updateTags({
          title: tags.title,
          description: tags.description,
          image: tags.image
        });
      })
    ).subscribe();

    this.age = Math.floor(Math.abs(new Date().getTime() - new Date('2015/01/01').getTime()) / (1000 * 3600 * 24 * 365));
    this.email = 'giroux.dominik@gmail.com';
    this.phone = '(819) 342-0113';

  }

}
