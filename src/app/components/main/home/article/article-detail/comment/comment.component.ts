import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-comment',
    template: '<disqus [identifier]="pageId"></disqus>'
})

export class CommentComponent {
    @Input() private pageId?: string;

    public constructor() {

    }
}