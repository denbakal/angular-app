import {NgModule} from '@angular/core';
import {PersonsComponent} from './persons.component';
import {personsRouter} from "./persons.router";

@NgModule({
  imports: [personsRouter],
  exports: [],
  declarations: [PersonsComponent],
  providers: [],
})
export class PersonsModule {
}
