import { Component, OnInit, ViewChild } from '@angular/core';
import { MatProgressBar, MatButton } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../../../models/user';
import { UserService } from '../../../../services/admin/user/user.service';
import { SnackbarService, SnackbarAction } from '../../../../services/shared/snackbar.service';
import { PasswordValidator } from '../../../../directives/password-validator';

@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.scss']
})

export class SignUpComponent implements OnInit {
  @ViewChild(MatProgressBar, {static: true}) progressBar?: MatProgressBar;
  @ViewChild(MatButton, {static: true}) submitButton?: MatButton;

  private signUpFormControl?: FormGroup;
  private isPasswordHide?: boolean;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private snackbarService: SnackbarService) {
    this.isPasswordHide = true; // default password hide mode
  }

  ngOnInit() {
    this.signUpFormControl = this.formBuilder.group({
      email: ['', [<any>Validators.required, <any>Validators.email]],
      name: ['', [<any>Validators.required, <any>Validators.maxLength(20)]],
      password: ['', [<any>Validators.required, <any>Validators.minLength(6), <any>Validators.maxLength(255)]],
      confirmPassword: ['', [<any>Validators.required, <any>Validators.minLength(6), <any>Validators.maxLength(255)]],
      isAgreed: ['', [<any>Validators.required, <any>Validators.requiredTrue]]
    }, { validator: PasswordValidator.MatchPassword });
  }

  signUp() {
    let signUpModel = new User;
    signUpModel.email = this.signUpFormControl!.value.email as string;
    signUpModel.name = this.signUpFormControl!.value.name as string;
    signUpModel.password = this.signUpFormControl!.value.password as string;

    this.userService.signUp(signUpModel)
      .subscribe(res => {
        this.snackbarService.openSnackBar(`Please sign in with created account!`, SnackbarAction.Success);
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
