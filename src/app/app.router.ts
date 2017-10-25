import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

export const router: Routes = [
  {
    path: '',
    loadChildren: 'app/about/about.module#AboutModule'
  },
  {
    path: '',
    loadChildren: 'app/persons/persons.module#PersonsModule'
  }
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(router, {useHash: true});
