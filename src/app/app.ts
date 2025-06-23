import { Component } from '@angular/core';
import { faHome, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { FooterProps } from '../types/footer.type';
import { TabLayoutOptions } from '../types/tab-layout.type';
import { SearchBar } from './common/search-bar/search-bar';
import { Footer } from './layout/footer/footer';
import { TabLayout } from './layout/tab-layout/tab-layout';

@Component({
    selector: 'app-root',
    imports: [SearchBar, TabLayout, Footer],
    templateUrl: './app.html',
    styleUrl: './app.css',
})
export class App {
    protected tabOptions: TabLayoutOptions[] = [
        {
            routerLink: 'notes',
            title: 'Notes',
            id: '1',
        },
        {
            routerLink: 'lists',
            title: 'Lists',
            id: '2',
        },
        {
            routerLink: 'recordings',
            title: 'Recordings',
            id: '3',
        },
    ];

    protected footerOptions: FooterProps[] = [
        {
            routerLink: '',
            title: 'Home',
            id: '1',
            icon: faHome,
        },
        {
            routerLink: 'add',
            title: 'Add',
            id: '2',
            icon: faPlus,
        },
        {
            routerLink: 'profile',
            title: 'Profile',
            id: '3',
            icon: faUser,
        },
    ];
}
