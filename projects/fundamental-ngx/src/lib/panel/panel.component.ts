import { Component, ElementRef, Inject, Input } from '@angular/core';
import { AbstractFdNgxClass } from '../utils/abstract-fd-ngx-class';

@Component({
    selector: 'fd-panel',
    templateUrl: './panel.component.html'
})
export class PanelComponent extends AbstractFdNgxClass {
    @Input() span;

    @Input() backgroundImage: string;

    _setProperties() {
        this._addClassToElement('fd-panel');
        if (this.span) {
            this._addClassToElement('fd-has-grid-column-span-' + this.span);
        }
        if (this.backgroundImage) {
            this._addStyleToElement('background-image', 'url("' + this.backgroundImage + '")');
        }
    }

    constructor(@Inject(ElementRef) elementRef: ElementRef) {
        super(elementRef);
    }
}
