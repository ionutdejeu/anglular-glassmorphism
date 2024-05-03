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

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarItemComponent,
    UITabsComponent,
    UITabItemComponent,
    UITabItemHeaderComponent,
    HeaderComponent,
    ContentHeaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
