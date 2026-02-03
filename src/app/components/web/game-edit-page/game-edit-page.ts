import {Component, inject, input, OnInit} from '@angular/core';
import {LoadingSpinner} from '../../structure/loading-spinner/loading-spinner';
import {GameService} from '../../../services/game-service';
import {Game} from '../../../common/interfaces';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {FormValidators} from '../../../validators/FormValidators';

@Component({
  selector: 'app-game-edit-page',
  imports: [
    LoadingSpinner,
    ReactiveFormsModule
  ],
  templateUrl: './game-edit-page.html',
  styleUrl: './game-edit-page.css',
})
export class GameEditPage implements OnInit {
  id = input<number>();
  private readonly gameService: GameService =
    inject(GameService);
  loaded = false;
  private readonly formBuilder: FormBuilder = inject(FormBuilder);
  formGame: FormGroup = this.formBuilder.group({
    id: [0],
    title: ['',[Validators.required,
      Validators.minLength(2),
      FormValidators.notOnlyWhiteSpace,
      FormValidators.forbiddenWord('hola'),
      Validators.maxLength(255)]],
    subtitle: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
    image: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
    description: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
    favorite: [false],
    created_at: ['']
  });

  // GETTERS
  get title(): any{return this.formGame.get('title')};
  get subtitle(): any{return this.formGame.get('subtitle')};
  get image(): any{return this.formGame.get('image')};
  get description(): any{return this.formGame.get('description')};
  get favorite(): any{return this.formGame.get('favorite')};

  ngOnInit() {
    if (this.id()) {
      // EDITANDO
      console.log(this.id());
      this.loadGame();
    } else {
      // AÑADIENDO
      console.log(this.id());
      this.loaded = true;
    }

  }

  private loadGame() {
    const id: number = this.id() as number;
    this.gameService.getGame(id).subscribe(
      {
        next: value => {
          console.log(value)
          this.formGame.setValue(value.data);
          this.loaded = true;
        }
      }
    )
  }

  onSubmit() {
    if (this.formGame.invalid){
      this.formGame.markAllAsTouched();
      return;
    }
    if (this.id()){
      this.gameService.updateGamePatch(
        this.formGame.get(
          'id')?.value,
               this.formGame.getRawValue()).subscribe(
        {
          next: value => {
            alert(value.message);
          },
          error: error => {
            console.error(error);
          }
        }
      )
    }
    else {
      this.gameService.addGame(
        this.formGame.getRawValue()).subscribe(
        {
          next: value => {
            alert(value.message);
          },
          error: error => {
            console.error(error);
          }
        }
      )
    }
  }
}
