import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { faArrowRight, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faYoutubeSquare, faLinkedin, faTwitterSquare, faDiscord } from '@fortawesome/free-brands-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(
      faArrowRight, faQuoteLeft, faQuoteRight,
      faGithubSquare, faYoutubeSquare, faLinkedin, faTwitterSquare, faDiscord,
    );
  }
}
