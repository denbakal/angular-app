import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from "./about.component";

const ABOUT_ROUTER: Routes = [
  {
    path: 'about2',
    component: AboutComponent
  }
];

export const aboutRouter = RouterModule.forChild(ABOUT_ROUTER);
