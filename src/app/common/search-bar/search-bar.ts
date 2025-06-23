import {
  booleanAttribute,
  Component,
  computed,
  effect,
  forwardRef,
  input,
  signal,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchBar),
      multi: true,
    },
  ],
})
export class SearchBar {
  placeholder = input<string>('');
  disabled = input<boolean>(false);
  readonly = input(false, { transform: booleanAttribute });
  maxlength = input<number>();
  minlength = input<number>();
  name = input<string>('searchbar');
  id = input('searchbar');

  protected readonly value = signal<string>('');
  protected onChange = (value: string) => {
    console.log(value);
  };
  protected onTouched = () => {};
  protected effectiveDisabled = computed(() => this.disabled() || this.formControlDisabled());

  private readonly formControlDisabled = signal(false);

  constructor() {
    effect(() => {
      const isDisabled = this.disabled();
      if (typeof this.setDisabledState === 'function') {
        this.setDisabledState(isDisabled || false);
      }
    });
  }

  protected onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value.set(input.value);
    this.onChange(this.value());
  }

  writeValue(value: string): void {
    this.value.set(value);
  }
  registerOnChange(fn: FunctionStringCallback): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: VoidFunction): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.formControlDisabled.set(isDisabled);
  }
}
