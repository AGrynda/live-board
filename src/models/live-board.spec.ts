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
  
  describe('score updated', () => {
    let liveBoard: LiveBoard;
    let match: Match;

    beforeEach(() => {
      liveBoard = new LiveBoard();
      match = liveBoard.startMatch('Poland', 'Slovakia');
    });

    it('should update score', () => {
      liveBoard.updateScore(match.uuid, 2, 1);
      expect(match.teamHomeScore).toEqual(2);
      expect(match.teamAwayScore).toEqual(1);
    });

    it('should update score for correct match', () => {
      const match2 = liveBoard.startMatch('USA', 'Canada');
      liveBoard.updateScore(match2.uuid, 2, 1);
      expect(match.teamHomeScore).toEqual(0);
      expect(match.teamAwayScore).toEqual(0);
      expect(match2.teamHomeScore).toEqual(2);
      expect(match2.teamAwayScore).toEqual(1);
    });

    it('should throw error if match not found', () => {
      expect(() => liveBoard.updateScore('123', 1, 0)).toThrowError('Match not found');
    });
  });
  
  describe('match finished', () => {
    let liveBoard: LiveBoard;
    let match: Match;
    let summary: any[];

    beforeEach(() => {
      liveBoard = new LiveBoard();
    });

    it('should throw error if match not found', () => {
      expect(() => liveBoard.endMatch('123')).toThrowError('Match not found');
    });

    it('should remove a match', () => {
      match = liveBoard.startMatch('Poland', 'Slovakia');
      liveBoard.startMatch('USA', 'Canada');
      liveBoard.endMatch(match.uuid);
      summary = liveBoard.getSummary();
      expect(summary.length).toEqual(1);
    });
  });
});
