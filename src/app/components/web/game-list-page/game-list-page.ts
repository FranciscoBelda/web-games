import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {GameService} from '../../../services/game-service';
import {Game} from '../../../common/interfaces';
import {LoadingSpinner} from '../../structure/loading-spinner/loading-spinner';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-game-list-page',
  imports: [
    LoadingSpinner,
    RouterLink
  ],
  templateUrl: './game-list-page.html',
  styleUrl: './game-list-page.css',
})
export class GameListPage implements OnInit {
  private readonly gameService: GameService = inject(GameService);
  gameList: WritableSignal<Game[]> = signal<Game[]>([]);
  loaded = false;
  favorites = false;

  ngOnInit() {
    this.loadGames();
  }


  private loadGames() {
    this.gameService.getGames().subscribe(
      {
        next: result => {
          this.gameList.set(result.data);
          this.loaded = true;
        },
        error: error => {
          console.error(error);
        }
      }
    )
  }

  deleteGame(id: number) {
    this.gameService.deleteGame(id).subscribe(
      {
        next: result => {
          this.loadGames();
          alert(result.message);
        },
        error: error => {
          console.error(error);
        }
      }
    )
  }

  changeFavorite(game: Game) {
    game.favorite = !game.favorite;
    this.gameService.updateGamePatch(game.id, {favorite: game.favorite}).subscribe(
      {
        next: result => {
          alert(result.message);
        },
        error: error => {
          console.error(error);
        }
      }
    )
  }


  favoriteList() {
    this.favorites = !this.favorites;
    if (this.favorites){
      this.gameList.update(
        list => list.filter(game => game.favorite))
    }else {
      this.loadGames();
    }
  }

  search(event: any) {
    console.log(event);
    const word = event.target.value.toLowerCase() as string;
    if (word === '') {
      this.loadGames();
      return;
    }
    this.gameList.update(games => games.filter(
      game => {
      return game.title.toLowerCase().includes(word) ||
        game.subtitle.toLowerCase().includes(word) ||
        game.description.toLowerCase().includes(word)
    }))
  }
}
