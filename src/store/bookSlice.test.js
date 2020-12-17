import reducer, {
  setCourses,
  setOpenedPage,
  setIsLoading,
} from './bookSlice';

import {
  courses,
  page1
} from './../../fixtures'

describe('book reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      isLoading: false,
      bookId: 0,
      courses: [],
      openedPage: {
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
        openedPage: {
          pageId: 0,
          courseId: 0,
          title: '',
          text: '',
        },
      };

      const state = reducer(initialState, setOpenedPage({ openedPage: page1 }));

      expect(state.openedPage.courseId).toEqual(1);
      expect(state.openedPage.pageId).toEqual(1);
    });
  });

  describe('setIsLoading', () => {
    it('changes isLoading', () => {
      const initialState = {
        isLoading: false,
      };

      const state = reducer(initialState, setIsLoading(true));

      expect(state.isLoading).toBe(true);
    });
  });
});
