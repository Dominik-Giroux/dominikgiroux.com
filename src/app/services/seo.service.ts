import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { MetaData } from '../models/meta-data';

@Injectable()
export class SeoService {

    constructor(
        private db: AngularFirestore,
        private meta: Meta,
        private titleService: Title
    ) { }

    updateTags(tags: any) {

        // Default values
        tags = {
            title: environment.seo.title,
            description: environment.seo.description,
            image: environment.seo.image,
            slug: environment.seo.slug,
            ...tags
        };

        // Set a title
        this.titleService.setTitle(tags.title);

        // Set meta tags
        this.meta.updateTag({name: 'title', content: tags.title});
        this.meta.updateTag({name: 'description', content: tags.description});
        this.meta.updateTag({name: 'image', content: tags.image});

        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: environment.sitename });
        this.meta.updateTag({ name: 'twitter:title', content: tags.title });
        this.meta.updateTag({ name: 'twitter:description', content: tags.description });
        this.meta.updateTag({ name: 'twitter:image', content: tags.image });

        this.meta.updateTag({ property: 'og:type', content: 'article' });
        this.meta.updateTag({ property: 'og:site_name', content: environment.sitename });
        this.meta.updateTag({ property: 'og:title', content: tags.title });
        this.meta.updateTag({ property: 'og:description', content: tags.description });
        this.meta.updateTag({ property: 'og:image', content: tags.image });
        this.meta.updateTag({ property: 'og:url', content: environment.siteurl + tags.slug });
    }

    getMeta(component: string): Observable<MetaData> {
        return this.db.collection('components').doc(component).valueChanges() as Observable<MetaData>;
    }

}
