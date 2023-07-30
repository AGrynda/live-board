import { v4 as uuidv4 } from 'uuid';

export class Match {
  uuid: string;
  teamHome: string;
  teamAway: string;
  teamHomeScore: number;
  teamAwayScore: number;

  constructor(teamHome: string, teamAway: string) {
    this.uuid = this.generateUUID();
    this.teamHome = teamHome;
    this.teamAway = teamAway;
    this.teamHomeScore = 0;
    this.teamAwayScore = 0;
  }
  
  private generateUUID(): string {
    return uuidv4();
  }
}
