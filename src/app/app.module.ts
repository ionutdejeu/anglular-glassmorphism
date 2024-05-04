import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';
import { UITabsComponent } from './components/tabs/ui-tabs.component';
import { UITabItemComponent } from './components/tab-item/ui-tab-item.component';
import { UITabItemHeaderComponent } from './components/tab-item-header/tab-item-header.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentHeaderComponent } from './components/content-header/content-header.component';
import { AppsComponent } from './components/pages/apps/apps.component';
import { WorkComponent } from './components/pages/work/work.component';
import { DiscoverComponent } from './components/pages/discover/discover.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './components/app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarItemComponent,
    UITabsComponent,
    UITabItemComponent,
    UITabItemHeaderComponent,
    HeaderComponent,
    ContentHeaderComponent,
    AppsComponent,
    WorkComponent,
    DiscoverComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
