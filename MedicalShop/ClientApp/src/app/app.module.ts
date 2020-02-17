import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { MedicineshopService } from './medicineshop.service';
import { EditComponent } from './edit/edit.component';
import { FilterPipe } from './filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    EditComponent,
    FilterPipe,
    AddComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'add', component: AddComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'edit/:id', component: EditComponent },
      { path: 'delete/:id', component: DeleteComponent },
    ])
  ],
  providers: [
    MedicineshopService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
