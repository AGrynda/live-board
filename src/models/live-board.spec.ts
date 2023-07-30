import { LiveBoard } from "./live.board";

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
});
