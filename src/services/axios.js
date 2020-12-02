/*
 * api 를 대신하여, 임시로 만들어 놓은 mock axios 입니다.
 * 극히 일부 예제에 대해서만 만들었으며, api 연결 후 삭제될 아이입니다.
 */

import {
  courses,
  page,
} from '../../fixtures';

function axios() {
  const response = {
    'https://api.com/books/1/courses' : { data : courses },
    'https://api.com/books/1/courses/1/pages/1' : { data : page },
  }

  return {
    get: (url) => {
      return new Promise((resolve, reject) => {
        setTimeout(function() {
          resolve(response[url])
        }, 500);
      });
    }
  };
}

export default axios();
