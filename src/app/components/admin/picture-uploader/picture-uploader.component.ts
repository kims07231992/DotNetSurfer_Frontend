import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SnackbarService, SnackbarAction } from '../../../services/shared/snackbar.service';

@Component({
  selector: 'app-picture-uploader',
  templateUrl: './picture-uploader.component.html',
  styleUrls: ['./picture-uploader.component.scss']
})

export class PictureUploaderComponent implements OnInit {
  @Input() private picture?: string;
  @Input() private pictureMimeType?: string;

  @Output() private uploadedPictureBase64 = new EventEmitter<string>();
  @Output() private uploadedPictureMimeType = new EventEmitter<string>();

  private uploadedPictureFile?: File;
  private uploadedPictureSrc?: string;

  private acceptedExtension?: string;
  private acceptedPattern?: RegExp;

  private isBrowsable?: boolean;
  private isUploaded?: boolean;
  private isCancelable?: boolean;
  private isRemovable?: boolean;

  private currentPictureBase64?: string;
  private currentPictureMimeType?: string;
  private currentStatus?: string;

  public constructor(
    private snackbarService: SnackbarService) {
  }

  public ngOnInit() {
    this.acceptedExtension = 'image/*'; // to check file input
    this.acceptedPattern = /image-*/; // to check after browsing
    this.isBrowsable = true;
    this.isRemovable = true;
    this.currentStatus = 'Unselected';
  }

  public fileInputOnChange(e) {
    this.uploadedPictureFile = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

    if (!this.uploadedPictureFile!.type.match(this.acceptedPattern!)) {
      this.snackbarService.openSnackBar('Please Select Image Files', SnackbarAction.Error)
      return;
    }

    this.isUploaded = true;
    this.currentStatus = 'Selected';
  }

  public uploadPicture() {
    const fileReader = new FileReader();
    fileReader.onloadend = (e) => {
      this.uploadedPictureSrc = fileReader.result.toString();
      if (this.uploadedPictureSrc!.includes('base64')) { // to avoid indexOutOfRange
        this.currentPictureBase64 = this.getBase64StringFromSrc(this.uploadedPictureSrc!);
        this.currentPictureMimeType = this.getBase64ImageMimeTypeFromSrc(this.uploadedPictureSrc!);

        this.uploadedPictureBase64.emit(this.currentPictureBase64);
        this.uploadedPictureMimeType.emit(this.currentPictureMimeType);
      }

      this.isUploaded = false;
      this.isCancelable = true;
      this.currentStatus = 'Uploaded';
    }
    fileReader.readAsDataURL(this.uploadedPictureFile!);
  }

  public cancelPicture() {
    this.isBrowsable = true;
    this.isCancelable = false;

    // Revert to input picture
    this.uploadedPictureBase64.emit(this.picture);
    this.uploadedPictureMimeType.emit(this.pictureMimeType);

    this.currentPictureBase64 = this.picture;
    this.currentPictureMimeType = this.pictureMimeType;
    this.currentStatus = 'Canceled';
  }

  public removePicture() {
    this.isUploaded = false;
    this.isBrowsable = false;
    this.isCancelable = true;

    // Clear image data
    this.uploadedPictureBase64.emit(undefined);
    this.uploadedPictureMimeType.emit(undefined);

    this.currentPictureBase64 = '';
    this.currentPictureMimeType = '';
    this.currentStatus = 'Removed';
  }

  private getBase64StringFromSrc(src: string) {
    return src.split('base64,')[1];
  }

  private getBase64ImageMimeTypeFromSrc(src: string) {
    let imageMimeType;
    var mime = src.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);

    if (mime && mime.length) {
      imageMimeType = mime[1];
    }

    return imageMimeType;
  }
}
