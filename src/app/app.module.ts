import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { UserComponent } from './user/user.component';
import { CommonComponent } from './common/common.component';
import { DatasComponent } from './datas/datas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    UserComponent,
    CommonComponent,
    DatasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
