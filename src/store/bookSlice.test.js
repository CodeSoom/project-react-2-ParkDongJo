import reducer, {
  setCourses,
  setOpenedPage,
} from './bookSlice';

import {
  courses,
  page1
} from './../../fixtures'

describe('book reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      bookId: 0,
      courses: [],
      opendPage: {
        pageId: 0,
        courseId: 0,
        title: '',
        text: '',
      }
    }

    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });
  
      expect(state).toEqual(initialState);
    });
  });

  describe('setCourses', () => {
    it('changes courses', () => {
      const initialState = {
        courses: [],
      };

      const state = reducer(initialState, setCourses(courses));

      expect(state.courses).not.toHaveLength(0);
    });
  });

  describe('setOpenedPage', () => {
    it('changes openedPage', () => {
      const initialState = {
        opendPage: {
          pageId: 0,
          courseId: 0,
          title: '',
          text: '',
        },
      };

      const state = reducer(initialState, setOpenedPage(page1));

      expect(state.opendPage.courseId).toEqual(1);
      expect(state.opendPage.pageId).toEqual(1);
    });
  });
});
