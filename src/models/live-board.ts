import { LiveBoardInterface, Match } from ".";

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
    if(!this.matches.delete(matchUuid)) {
      throw new Error('Match not found');
    }
  }
  
  getSummary() {
    const summary = Array.from(this.matches.values());
    summary.sort(this.sortMatches);

    return summary.map((match) => { 
      return match.getSummary();
    });
  }

  private sortMatches(a: Match, b: Match) {
    if(a.totalScore === b.totalScore) {
      return b.startedTimestamp - a.startedTimestamp;
    }
    return b.totalScore - a.totalScore;
  };
  
}
