import { LiveBoardInterface } from "./live-board.interface";
import { Match } from "./match";

export class LiveBoard implements LiveBoardInterface {
  matches: Match[] = [];
  
  startMatch(teamHome: string, teamAway: string): Match {
    const match = new Match(teamHome, teamAway);
    this.matches.push(match);
    return match;;
  }

  updateScore(matchUuid: string, teamHomeScore: number, teamAwayScore: number): void {
    throw new Error("Method not implemented.");
  }
  endMatch(matchUuid: string): void {
    throw new Error("Method not implemented.");
  }
  getSummary(): any[] {
    return this.matches;
  }
  
}
