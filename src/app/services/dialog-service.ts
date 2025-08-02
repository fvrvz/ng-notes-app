import { ComponentType } from '@angular/cdk/portal';
import { inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Injectable({
    providedIn: 'root',
})
export class DialogService {
    readonly #dialog = inject(MatDialog);

    openCustomDialog<TData = unknown, TReturn = unknown>(
        component: ComponentType<unknown>,
        data?: TData,
        config?: MatDialogConfig,
    ): MatDialogRef<unknown, TReturn> {
        const dialogConfig: MatDialogConfig = {
            width: '80vw',
            maxWidth: '70rem',
            disableClose: true,
            ...config,
            data,
        };

        return this.#dialog.open<unknown, TData, TReturn>(component, dialogConfig);
    }
}
