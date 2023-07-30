export interface LiveBoardInterface {
  startMatch(teamHome: string, teamAway: string): string;
  updateScore(matchUuid: string, teamHomeScore: number, teamAwayScore: number): void;
  endMatch(matchUuid: string): void;
  getSummary(): string[];
};
