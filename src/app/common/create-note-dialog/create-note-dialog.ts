import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

export type CreateNoteReturnValues = {
    title: string;
    body: string;
    color?: string;
};

@Component({
    selector: 'app-create-note-dialog',
    imports: [
        MatDialogContent,
        MatDialogActions,
        MatFormField,
        MatButton,
        MatDialogClose,
        MatLabel,
        ReactiveFormsModule,
        MatInput,
    ],
    templateUrl: './create-note-dialog.html',
    styleUrl: './create-note-dialog.css',
})
export class CreateNoteDialog {
    readonly #dialogRef = inject(MatDialogRef<CreateNoteDialog, CreateNoteReturnValues>);

    protected readonly form = new FormGroup({
        title: new FormControl<string>('', Validators.required),
        body: new FormControl<string | null>(null),
        // color: new FormControl<string>('default'),
    });

    constructor() {
        // this.#dialogRef.updateSize('40rem')
    }

    protected onSubmit() {
        this.#dialogRef.close(this.form.getRawValue());
    }
}
