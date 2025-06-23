import { Component, input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TabLayoutOptions } from '../../../types/tab-layout.type';

@Component({
    selector: 'app-tab-layout',
    imports: [RouterOutlet, RouterLink],
    templateUrl: './tab-layout.html',
    styleUrl: './tab-layout.css',
})
export class TabLayout {
    options = input.required<TabLayoutOptions[]>();
}
