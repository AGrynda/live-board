import { LiveBoard } from "./live.board";

describe('Live Board Test', () => {
  it('should create liveBoard', () => {
    const liveBoard = new LiveBoard();
    expect(liveBoard).toBeTruthy();
  });
});
