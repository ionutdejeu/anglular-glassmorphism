import { AfterContentInit, Component, ContentChild, Input, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { UITabItemHeaderComponent } from '../tab-item-header/tab-item-header.component';

@Component({
  selector: 'ui-tab-item',
  templateUrl: './ui-tab-item.component.html',
  styleUrls: ['./ui-tab-item.component.scss']
})
export class UITabItemComponent implements AfterContentInit {

  @Input() tabTitle!: string;
  @Input() active = false;
  @Input() template: any;

  @ContentChild('tabHeader', {static: true}) headerTplRef!: TemplateRef<any>;
  @ViewChild(UITabItemHeaderComponent) headerView?: QueryList<UITabItemHeaderComponent>;
  @ContentChild(UITabItemHeaderComponent) header?: QueryList<UITabItemHeaderComponent>;
  ngAfterContentInit() {
    console.log("Content Children", this.headerTplRef,this.header);
  }
}
