import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full',
    },
    {
        path: 'search',
        loadChildren: () => import('./feature/search-page/search-page.module')
            .then(module => module.SearchPageModule),
    },
    {
        path: 'setting',
        loadChildren: () => import('./feature/setting-page/setting-page.module')
            .then(module => module.SettingPageModule),
    },
    // Fallback URL
    {
        path: '**',
        redirectTo: 'search',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
