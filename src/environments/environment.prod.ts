import { firebase } from './private';

export const environment = {
  production: true,
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
