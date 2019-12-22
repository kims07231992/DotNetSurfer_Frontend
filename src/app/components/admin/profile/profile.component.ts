import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../../models/user';
import { ProfileService } from '../../../services/admin/profile/profile.service';
import { SnackbarService, SnackbarAction } from '../../../services/shared/snackbar.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    private user?: User;
    private title = 'Profile';
    private profileFormControl?: FormGroup;
    private passwordFormControl?: FormGroup;
    private isPasswordHide?: boolean;

    public constructor(
      private formBuilder: FormBuilder,
      private profileService: ProfileService,
      private snackbarService: SnackbarService) {
        this.isPasswordHide = true; // default password hide mode
    }

    public ngOnInit() {
        this.user = new User();
        this.profileFormControl = this.formBuilder.group({
            name: ['', [<any>Validators.required, <any>Validators.maxLength(20)]],
            email: ['', [<any>Validators.required, <any>Validators.email]],
            title: ['', [<any>Validators.maxLength(20)]],
            phone: ['', [<any>Validators.maxLength(20)]],
            address: ['', [<any>Validators.maxLength(100)]],
            introduction: ['', [<any>Validators.maxLength(100)]]
        });
        this.passwordFormControl = this.formBuilder.group({
            password: ['', [<any>Validators.required, <any>Validators.minLength(6), <any>Validators.maxLength(255)]]
        });
         this.fetchUser();
    }

    fetchUser() {
        this.profileService.getProfile()
            .subscribe(res => {
              this.user = res as User;
              this.user.password = undefined;
            }, error => {

            })
    }

    uploadPictureBase64(event) {
        this.user!.picture = event as string;
    }

    uploadPictureMimeType(event) {
        this.user!.pictureMimeType = event as string;
    }

    updateProfile() {
        return this.profileService.updateProfile(this.user!)
            .subscribe(res => {
                this.snackbarService.openSnackBar('Your information has been updated.', SnackbarAction.Update);
                this.fetchUser();
            }, error => {

            });
    }
}
