// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material.module';
import { FirebaseModule } from './modules/firebase.module';

// Services
import { AuthService } from './services/@auth/auth.service';
import { SeoService } from './services/seo.service';

// Layouts Components
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { NavbarAuthComponent } from './layout/navbar/auth/auth.component';
import { FooterComponent } from './layout/footer/footer.component';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/defaults/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './layout/menu/menu.component';
import { DeleteDialogComponent } from './layout/dialogs/delete/delete.dialog.component';
import { ErrorDialogComponent } from './layout/dialogs/error/error.dialog.component';
import { LoadingDialogComponent } from './layout/dialogs/loading/loading.dialog.component';

import { environment } from '../environments/environment';

@NgModule({
  entryComponents: [
    DeleteDialogComponent,
    ErrorDialogComponent,
    LoadingDialogComponent
  ],
  declarations: [
    AppComponent,
    DeleteDialogComponent,
    ErrorDialogComponent,
    LoadingDialogComponent,
    HomeComponent,
    NavbarComponent,
    NavbarAuthComponent,
    SidenavComponent,
    FooterComponent,
    ServicesComponent,
    AboutComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FirebaseModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    AuthService,
    SeoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
