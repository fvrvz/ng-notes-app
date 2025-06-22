import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterProps } from '../../../types/footer.type';
import { IconButton } from '../../common/icon-button/icon-button';

@Component({
    selector: 'app-footer',
    imports: [RouterLink, IconButton],
    templateUrl: './footer.html',
    styleUrl: './footer.css',
})
export class Footer {
    options = input.required<FooterProps[]>();
}
