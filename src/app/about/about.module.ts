import {NgModule} from '@angular/core';
import {AboutComponent} from "./about.component";
import {aboutRouter} from "./about.router";

@NgModule({
  imports: [aboutRouter],
  exports: [],
  declarations: [AboutComponent],
  providers: [],
})
export class AboutModule {
}
