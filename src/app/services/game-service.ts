import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiResponseGame, ApiResponseGames, ApiResponseMessage, Game} from '../common/interfaces';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private readonly httpClient: HttpClient = inject(HttpClient);
  private readonly urlBase: string =
    'http://localhost:3000/api/v1/games/';

  getGames(): Observable<ApiResponseGames>{
    return this.httpClient.get<ApiResponseGames>(
      this.urlBase
    )
  }

  getGame(id: number): Observable<ApiResponseGame>{
    return this.httpClient.get<ApiResponseGame>(
      this.urlBase + id
    )
  }

  addGame(game: Game): Observable<ApiResponseMessage>{
    return this.httpClient.post<ApiResponseMessage>(
      this.urlBase, game
    )
  }

  updateGamePatch(id: number, game: Partial<Game>): Observable<ApiResponseMessage>{
    return this.httpClient.patch<ApiResponseMessage>(
      this.urlBase + id, game
    )
  }
  updateGamePut(game: Game): Observable<ApiResponseMessage>{
    return this.httpClient.put<ApiResponseMessage>(
      this.urlBase + game.id, game
    )
  }

  deleteGame(id: number): Observable<ApiResponseMessage>{
    return this.httpClient.delete<ApiResponseMessage>(
      this.urlBase + id
    )
  }
}
