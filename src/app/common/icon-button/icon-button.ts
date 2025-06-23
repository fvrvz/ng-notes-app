import { Component, computed, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';

@Component({
    selector: 'app-icon-button',
    imports: [FontAwesomeModule],
    templateUrl: './icon-button.html',
    styleUrl: './icon-button.css',
})
export class IconButton {
    icon = input.required<IconProp>();
    size = input<SizeProp>();
    onClick = input<VoidFunction>();
    navigateTo = input<string>();
    label = input<string>();

    private readonly router = inject(Router);

    protected action = computed(() => this.onClick() ?? this.router.navigate([this.navigateTo()]));
}
