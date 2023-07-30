import { LiveBoardInterface } from "./live-board.interface";

export class LiveBoard implements LiveBoardInterface {
  startMatch(teamHome: string, teamAway: string): string {
    throw new Error("Method not implemented.");
  }
  updateScore(matchUuid: string, teamHomeScore: number, teamAwayScore: number): void {
    throw new Error("Method not implemented.");
  }
  endMatch(matchUuid: string): void {
    throw new Error("Method not implemented.");
  }
  getSummary(): string[] {
    return [];
  }
  
}
