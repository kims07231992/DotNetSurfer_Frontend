import { Component, OnInit, ViewChild } from '@angular/core';
import { MatProgressBar, MatButton } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../../../models/user';
import { UserService } from '../../../../services/admin/user/user.service';
import { SnackbarService, SnackbarAction } from '../../../../services/shared/snackbar.service';

@Component({
  selector: 'app-signIn',
  templateUrl: './signIn.component.html',
  styleUrls: ['./signIn.component.scss']
})

export class SignInComponent implements OnInit {
  @ViewChild(MatProgressBar, {static: true}) private progressBar?: MatProgressBar;
  @ViewChild(MatButton, {static: true}) private submitButton?: MatButton;

  private signInFormControl?: FormGroup;
  private isPasswordHide?: boolean;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private snackbarService: SnackbarService) {
    this.isPasswordHide = true; // default password hide mode
  }

  ngOnInit() {
    this.signInFormControl = this.formBuilder.group({
      email: ['', [<any>Validators.required, <any>Validators.email]],
      password: ['', [<any>Validators.required, <any>Validators.minLength(6), <any>Validators.maxLength(255)]]
    });
  }

  signIn() {
    const signInModel = this.signInFormControl!.value as User
    this.userService.signIn(signInModel)
      .subscribe(res => {
        const user = res['user'] as User;
        this.snackbarService.openSnackBar(`Hello ${user.name}!`, SnackbarAction.Success);
      },
      error => {
          // Refresh form status
          this.submitButton!.disabled = false;
          this.progressBar!.mode = 'determinate';
        });

    this.submitButton!.disabled = true;
    this.progressBar!.mode = 'indeterminate';
  }
}
