import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DiagramModule, OverviewModule, DiagramContextMenuService} from '@syncfusion/ej2-angular-diagrams';
import {ButtonModule, SwitchModule} from '@syncfusion/ej2-angular-buttons';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DiagramModule,
    ButtonModule,
    OverviewModule,
    SwitchModule
  ],
  providers: [DiagramContextMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
