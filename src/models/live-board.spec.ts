import { LiveBoard } from "./live.board";
import { Match } from "./match";

describe('Live Board Test', () => {
  describe('when the live board is created', () => {
    let liveBoard: LiveBoard;
    beforeEach(() => {
      liveBoard = new LiveBoard();
    });
    it('should create the live board', () => {
      expect(liveBoard).toBeTruthy();
    });

    it('should summary be empty', () => {
      const summary = liveBoard.getSummary();
      expect(summary.length).toEqual(0);
    });
  });

  describe('match started', () => {
    let liveBoard: LiveBoard;
    let summary: any[];
    let match: Match;

    beforeEach(() => {
      liveBoard = new LiveBoard();
      match = liveBoard.startMatch('Poland', 'Slovakia');
    });

    it('should summary contain 1 match', () => {
      summary = liveBoard.getSummary();
      expect(summary.length).toEqual(1);
    });

    it('result of created match should be 0 - 0', () => {
      expect(match.teamHomeScore).toEqual(0);
      expect(match.teamAwayScore).toEqual(0);
    });
    
    it('should summary contain 2 matches', () => {
      liveBoard.startMatch('USA', 'Canada');
      summary = liveBoard.getSummary();
      expect(summary.length).toEqual(2);
    });
  });
});
