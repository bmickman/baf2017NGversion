import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavComponent } from './components/nav/nav.component';
import { LownavComponent } from './components/lownav/lownav.component';
import { ArtistsComponent } from './components/artists/artists.component';

import { AgmCoreModule } from '@agm/core';
import { FilterPipe } from './filter.pipe';


const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'artists', component:ArtistsComponent}
]

@NgModule({
  declarations: [
    FilterPipe,
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    LownavComponent,
    ArtistsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDuGzUUUa9SPgCnaLQCR5Zuf4lQwzOctYw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
