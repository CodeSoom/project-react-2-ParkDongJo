import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import {
  loadCourse,
  loadPage,
  setCourses,
  setOpenedPage,
} from './bookSlice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('./../services/api');

describe('actions', () => {
  let store;

  describe('loadCourse', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it('runs setCourses', async () => {
      await store.dispatch(loadCourse({ bookId: 1 }));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setCourses([]));
    });
  });

  describe('loadPage', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it('runs setOpenedPage', async () => {
      await store.dispatch(loadPage({ bookId: 1, courseId: 1, pageId: 1 }));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setOpenedPage({}));
    });
  });

});
