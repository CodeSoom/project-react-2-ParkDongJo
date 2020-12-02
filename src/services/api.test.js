import {
  fetchCourses,
  fetchPage,
} from './api';

import axios from 'axios';

import { courses, page } from '../../fixtures';

jest.mock('axios');

describe('api', () => {
  it('fetchCourses', async () => {
    const resp = { data: courses };

    axios.get.mockResolvedValue(resp);

    const data = await fetchCourses({
      bookId: 1
    });

    expect(data).not.toHaveLength(0);
  });

  it('fetchPage', async () => {
    const resp = { data: page };

    axios.get.mockResolvedValue(resp);

    const data = await fetchPage({
      bookId: 1,
      courseId: 1,
      pageId: 1,
    });

    expect(data).toEqual(page);
  });
});