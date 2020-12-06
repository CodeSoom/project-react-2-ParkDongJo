/*
 * api 를 대신하여, 임시로 만들어 놓은 mock axios 입니다.
 * 극히 일부 예제에 대해서만 만들었으며, api 연결 후 삭제될 아이입니다.
 */

import {
  courses,
  page1,
  page2,
  page3,
  page4,
} from '../../fixtures';

function axios() {
  const response = {
    '/books/1/courses' : { data : courses },
    '/books/1/courses/1/pages/1' : { data : page1 },
    '/books/1/courses/1/pages/2' : { data : page2 },
    '/books/1/courses/2/pages/3' : { data : page3 },
    '/books/1/courses/2/pages/4' : { data : page4 },
  }

  return {
    get: (url) => {
      return new Promise((resolve, reject) => {
        setTimeout(function() {
          var match = url.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
          resolve(response[match[5]])
        }, 500);
      });
    }
  };
}

export default axios();
