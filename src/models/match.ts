export class Match {
  teamHome: string;
  teamAway: string;
  teamHomeScore: number;
  teamAwayScore: number;

  constructor(teamHome: string, teamAway: string) {
    this.teamHome = teamHome;
    this.teamAway = teamAway;
    this.teamHomeScore = 0;
    this.teamAwayScore = 0;
  }
}
