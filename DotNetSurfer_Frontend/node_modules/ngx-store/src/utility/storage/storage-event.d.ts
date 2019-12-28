export declare class NgxStorageEvent implements StorageEvent {
    type: string;
    key: string;
    storageArea: Storage;
    protected static initTimeStamp: number;
    oldValue: any;
    newValue: any;
    NONE: any;
    timeStamp: number;
    readonly bubbles = false;
    readonly cancelBubble = false;
    readonly cancelable = false;
    readonly composed = false;
    readonly currentTarget: Window;
    readonly defaultPrevented = false;
    readonly eventPhase = 2;
    readonly isTrusted = true;
    readonly path: Window[];
    readonly returnValue = true;
    readonly srcElement: any;
    readonly target: Window;
    readonly url: string;
    isInternal: boolean;
    constructor(type: string, key: string, storageArea: Storage);
    /**
     * Methods below exist only to satisfy TypeScript compiler
     */
    readonly initEvent: any;
    readonly preventDefault: any;
    readonly stopImmediatePropagation: any;
    readonly stopPropagation: any;
    readonly composedPath: any;
    readonly AT_TARGET: number;
    readonly BUBBLING_PHASE: number;
    readonly CAPTURING_PHASE: number;
}
