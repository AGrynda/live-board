import { Match } from ".";

export interface LiveBoardInterface {
  startMatch(teamHome: string, teamAway: string): Match;
  updateScore(matchUuid: string, teamHomeScore: number, teamAwayScore: number): void;
  endMatch(matchUuid: string): void;
  getSummary(): any[];
};
