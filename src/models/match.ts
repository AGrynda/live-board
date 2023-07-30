import { generateUUID } from "../utilities/utility";

export class Match {
  uuid: string;
  startedTimestamp: number;
  teamHome: string;
  teamAway: string;
  teamHomeScore: number;
  teamAwayScore: number;

  constructor(teamHome: string, teamAway: string) {
    this.uuid = generateUUID();
    this.startedTimestamp = Date.now();
    this.teamHome = teamHome;
    this.teamAway = teamAway;
    this.teamHomeScore = 0;
    this.teamAwayScore = 0;
  }

  public get totalScore(): number {
    return this.teamHomeScore + this.teamAwayScore;
  }

  public getSummary(): string {
    return `${this.teamHome} ${this.teamHomeScore} - ${this.teamAway} ${this.teamAwayScore}`;
  }
}
