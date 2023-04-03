import { Game } from "./Game";

export interface IGameUpdate
{
    timestamp: Date,
    type: 'penalty' | 'extraTime' | 'score' | 'gameEnd' |'gameStart',
    gameState: Game
}