import {Directive, ElementRef, HostBinding, HostListener} from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
constructor(private elRef:ElementRef) {
}
@HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen
    }
}
