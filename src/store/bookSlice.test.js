import reducer from './bookSlice';

describe('book reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      bookId: 0,
      sequence: 0,
      title: '',
      text: '',
      opened: true
    }

    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });
  
      expect(state).toEqual(initialState);
    });
  });
});