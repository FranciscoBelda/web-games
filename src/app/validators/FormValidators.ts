import {FormControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export class FormValidators{

  static notOnlyWhiteSpace(control: FormControl): ValidationErrors | null{
    if ((control.value != null) &&
      (control.value.trim().length === 0)){
      return {notOnlyWhiteSpace: true};
    }else return null;
  }

  public static forbiddenWord(word: string): ValidationErrors | null{
    return (control: FormControl): ValidationErrors | null => {
      const forbidden = new RegExp(word, 'i');
      if (forbidden.test(control.value)) {
        return {forbiddenWord: true};
      }else return null;
    }
  }

}
