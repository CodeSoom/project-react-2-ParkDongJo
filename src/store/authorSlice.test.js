import reducer from './bookSlice';

describe('book reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      name: '',
      profile: ''
    }

    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });
  
      expect(state).toEqual(initialState);
    });
  });
});
