// import axios from './axios';
import axios from 'axios';

export async function fetchCourses({ bookId }) {
  const url = `https://ws0feiccr7.execute-api.ap-northeast-2.amazonaws.com/dev/api/books/${bookId}/courses`;
  const response = await axios.get(url);
  return response.data;
}

export async function fetchPage({ bookId, courseId, pageId }) {
  const url = `https://ws0feiccr7.execute-api.ap-northeast-2.amazonaws.com/dev/api/books/${bookId}/courses/${courseId}/pages/${pageId}`;
  const response = await axios.get(url);
  return response.data;
}
