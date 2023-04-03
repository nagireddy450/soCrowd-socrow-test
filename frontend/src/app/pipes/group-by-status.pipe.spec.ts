import { GroupByStatusPipe } from './group-by-status.pipe';

describe('GroupByStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new GroupByStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
