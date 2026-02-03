export interface ApiResponseGames {
  status: boolean
  data: Game[]
}
export interface ApiResponseGame {
  status: boolean
  data: Game
}
export interface ApiResponseMessage {
  status: boolean
  message: string
}

export interface Game {
  id: number
  title: string
  subtitle: string
  image: string
  description: string
  favorite: boolean
  created_at: string
}
