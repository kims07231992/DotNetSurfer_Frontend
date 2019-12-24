import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-comment',
    template: '<disqus [identifier]="pageId"></disqus>'
})

export class CommentComponent {
    @Input() public pageId?: string;

    public constructor() {

    }
}