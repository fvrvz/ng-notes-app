import { Component, input } from '@angular/core';
import { FooterProps } from '../../../types/footer.type';
import { IconButton } from '../../common/icon-button/icon-button';

@Component({
    selector: 'app-footer',
    imports: [IconButton],
    templateUrl: './footer.html',
    styleUrl: './footer.css',
})
export class Footer {
    options = input.required<FooterProps[]>();
}
