import axios from './axios';

export async function fetchCourses({ bookId }) {
  const url = `https://api.com/books/${bookId}/courses`;
  const response = await axios.get(url);
  return response.data;
}

export async function fetchPage({ bookId, courseId, pageId }) {
  const url = `https://api.com/books/${bookId}/courses/${courseId}/pages/${pageId}`;
  const response = await axios.get(url);
  return response.data;
}