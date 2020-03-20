export const checkLoginAuthErrors = (authError, formErrors) => {
  if (authError) {
    switch (authError) {
      case 'EMAIL_NOT_FOUND':
        authError = 'email was not found';
        formErrors.email = authError;
        break;
      case 'INVALID_PASSWORD':
        authError = 'password is not valid';
        formErrors.password = authError;
        break;
      case 'USER_DISABLED':
        authError = 'user disabled, please contact us';
        formErrors.email = authError;
        break;
      default: return authError;
    }
  }
}

export const checkSignupAuthErrors = (authError, formErrors) => {
  if (authError) {
    switch (authError) {
      case 'EMAIL_EXISTS':
        authError = 'email already exists';
        formErrors.email = authError;
        break;
      case 'OPERATION_NOT_ALLOWED':
        authError = 'password sign-in is disabled';
        formErrors.password = authError;
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        authError = 'too many attempts, try again later';
        formErrors.email = authError;
        break;
      default: return authError;
    }
  }
}