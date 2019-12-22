import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-editor',
    templateUrl: './text-editor.component.html',
    styleUrls: ['./text-editor.component.scss']
})

export class TextEditorComponent {
    @Input() private content?: string;

    @Output() private changedContent = new EventEmitter<string>();

    constructor() {

    }

    onContentChanged() {
        this.changedContent.emit(this.content);
    }
}
