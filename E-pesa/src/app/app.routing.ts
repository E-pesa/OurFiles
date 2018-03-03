import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DocumentationComponent} from './component/documentation/documentation.component';
import {HelpComponent} from './component/help/help.component';
import {LearnmoreComponent} from './component/learnmore/learnmore.component';
import {SignupComponent} from './component/signup/signup.component';
import {Component} from '@angular/core/src/metadata/directives';
import {AboutComponent} from './component/about/about.component';
import { TeamComponent } from './component/team/team.component';
const appRoutes: Routes = [
    {
        path: 'doc',
        component: DocumentationComponent
    },
    {
        path: 'help',
        component: HelpComponent
    },
    {
        path: 'learn',
        component: LearnmoreComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: '',
        component: AboutComponent
    },
    {
        path: 'ourteam',
        component: TeamComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
