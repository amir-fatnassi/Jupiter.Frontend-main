import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () =>
      import('../features/about/about.module').then((m) => m.AboutModule)
  },
  {
    path: 'signin',
    loadChildren: () =>
      import('../features/sign-in/sign-in.module').then((m) => m.SignInModule)
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('../features/sign-up/sign-up.module').then((m) => m.SignUpModule)
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('../features/contact/contact.module').then((m) => m.ContactModule)
  },
  {
    path: 'feature-list',
    loadChildren: () =>
      import('../features/feature-list/feature-list.module').then(
        (m) => m.FeatureListModule
      )
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('../features/settings/settings.module').then(
        (m) => m.SettingsModule
      )
  },
  {
    path: 'examples',
    loadChildren: () =>
      import('../features/examples/examples.module').then(
        (m) => m.ExamplesModule
      )
  },
  {
    path: '**',
    redirectTo: 'about'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
