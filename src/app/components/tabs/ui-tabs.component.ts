import { Component, ContentChildren, QueryList } from '@angular/core';
import { UITabItemComponent } from '../tab-item/ui-tab-item.component';

@Component({
  selector: 'ui-tabs',
  templateUrl: './ui-tabs.component.html',
  styleUrls: ['./ui-tabs.component.scss']
})
export class UITabsComponent {
  @ContentChildren(UITabItemComponent) tabs!: QueryList<UITabItemComponent>;

  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    const activeTabs = this.tabs.filter(tab => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: UITabItemComponent) {
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => (tab.active = false));

    // activate the tab the user has clicked on.
    tab.active = true;
  }
}
