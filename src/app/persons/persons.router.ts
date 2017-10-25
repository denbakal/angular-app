import {RouterModule, Routes} from "@angular/router";
import {PersonsComponent} from "./persons.component";

const PERSONS_ROUTER: Routes = [
  {
    path: 'persons',
    component: PersonsComponent
  }
];

export const personsRouter = RouterModule.forChild(PERSONS_ROUTER);
