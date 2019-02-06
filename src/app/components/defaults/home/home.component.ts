import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';
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
      tap(tags => {
        this.seoService.updateTags({
          title: tags.title,
          description: tags.description,
          image: tags.image
        });
      })
    ).subscribe();

    // .subscribe(data => {

    //   this.metaData = data;

    //   this.title.setTitle(this.metaData.title);
    //   this.meta.updateTag({ content: 'Summary' }, 'name="twitter:card"');
    //   this.meta.updateTag({ content: '' }, 'name="og:url"');
    //   this.meta.updateTag({ content: this.metaData.title }, 'name="og:title"');
    //   this.meta.updateTag({ content: this.metaData.description }, 'name="og:description"');
    //   this.meta.updateTag({ content: this.metaData.image }, 'name="og:image"');

    //   // this.meta.addTags([
    //   //   { name: 'twitter:card', content: 'summary' },
    //   //   { name: 'og:url', content: '' },
    //   //   { name: 'og:title', content: this.metaData.title },
    //   //   { name: 'og:description', content: this.metaData.description },
    //   //   { name: 'og:image', content: this.metaData.image }
    //   // ]);

    //   console.log(data);

    // });

    this.age = Math.floor(Math.abs(new Date().getTime() - new Date('1991/06/10').getTime()) / (1000 * 3600 * 24 * 365));
    this.email = 'giroux.dominik@gmail.com';
    this.phone = '(819) 342-0113';

  }

}
