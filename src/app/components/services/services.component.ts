import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { MetaData } from '../../models/meta-data';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) { }

  private metaData: MetaData = new MetaData(
    'Services | Dominik Giroux',
    'A list of all available services',
    'https://firebasestorage.googleapis.com/v0/b/dominikgiroux-7.appspot.com/o/dominik-giroux.jpg?alt=media&token=21f3c4dc-21b9-40e3-b339-f3c58d8ecc7a'
  );

  ngOnInit() {
    this.title.setTitle(this.metaData.title);
    this.meta.addTags([
      { name: 'twitter:card', content: 'summary' },
      { name: 'og:url', content: '/services' },
      { name: 'og:title', content: this.metaData.title },
      { name: 'og:description', content: this.metaData.description },
      { name: 'og:image', content: this.metaData.image }
    ]);
  }
}
