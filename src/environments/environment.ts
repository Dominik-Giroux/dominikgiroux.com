// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { firebase } from './private';

export const environment = {
  production: false,
  firebase: firebase,
  sitename: 'Dominik Giroux',
  siteurl: 'https://dominikgiroux.com/', // Keep the trailing "/" for seo service
  seo: {
    title: 'Web Application Development | Dominik Giroux',
    description: 'I build powerful and scalable web apps that are custom made for your needs using the latest web technologies.',
    image: 'https://firebasestorage.googleapis.com/v0/b/dominikgiroux-7.appspot.com/o/dominik.jpg?alt=media&token=38cf3794-6388-4c78-84b4-d5bd705f42a9ng',
    slug: ''
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
