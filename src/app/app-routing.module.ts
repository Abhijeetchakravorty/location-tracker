import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LandingComponent } from './landing/landing.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
        {
                path: '',
                redirectTo: 'landing',
                pathMatch: 'full'
        },
        {
                path: '',
                component: AppComponent,
                children: [
                        {
                                path: 'login',
                                component: AuthenticationComponent
                        },
                        {
                        path: '',
                        component: NavigationComponent,
                        children: [
                                {
                                        path: 'landing',
                                        component: LandingComponent
                                },
                        ]
                }]
        },
        {
                path: '',
                redirectTo: '/landing',
                pathMatch: 'full'
        },
        { 
                path: '**', 
                component: NotFoundComponent
        }
];

@NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
})
export class AppRoutingModule { }
