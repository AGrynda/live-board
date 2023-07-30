import { LiveBoardInterface } from "./live-board.interface";
import { Match } from "./match";

export class LiveBoard implements LiveBoardInterface {
  private matches: Map<string, Match>;
  constructor() {
    this.matches = new Map<string, Match>();
  }


  startMatch(teamHome: string, teamAway: string): Match {
    const match = new Match(teamHome, teamAway);
    this.matches.set(match.uuid, match);
    return match;;
  }

  updateScore(matchUuid: string, teamHomeScore: number, teamAwayScore: number): void {
    const match = this.matches.get(matchUuid);
    if(match) {
      match.teamHomeScore = teamHomeScore;
      match.teamAwayScore = teamAwayScore;
    } else {
      throw new Error('Match not found');
    }
  }
  endMatch(matchUuid: string): void {
    throw new Error("Method not implemented.");
  }
  getSummary(): any[] {
    return Array.from(this.matches.values());
  }
  
}
