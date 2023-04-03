import { SortByGameStatusPipe } from './sort-by-game-status.pipe';

describe('SortByGameStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new SortByGameStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
