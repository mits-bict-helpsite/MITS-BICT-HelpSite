import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { NewsReelComponent } from './news-reel/news-reel.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { UnitWizardComponent } from './unit-wizard/unit-wizard.component';
import { NotFoundComponent } from './not-found/not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    NewsReelComponent,
    HomeComponent,
    ProfileComponent,
    UnitWizardComponent,
    NotFoundComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { 
        path: '',
        component: HomeComponent 
      },
      { 
        path: 'profile/:username',
        component: ProfileComponent 
      },
      { 
        path: 'unitwizard',
        component: UnitWizardComponent 
      },
      { 
        path: '**',
        component: NotFoundComponent 
      },

    ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
