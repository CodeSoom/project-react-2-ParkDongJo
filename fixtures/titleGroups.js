const titleGroups = [
  {
    idx: 1,
    mainTitle: 'javascript는 왜 이모양인가',
    subTitles: [
      {
        id: 1,
        text: '배열',
        path: `/books/1/courses/1/pages/1`,
        handleClick: () => {}
      },
      {
        id: 2,
        text: '객체',
        path: `/books/1/courses/1/pages/2`,
        handleClick: () => {}
      }
    ],
  },
  {
    idx: 2,
    mainTitle: 'typescript를 왜 선택했는가',
    subTitles: [
      {
        id: 3,
        text: '타입선언',
        path: `/books/1/courses/2/pages/3`,
        handleClick: () => {}
      },
      {
        id: 4,
        text: '인터페이스',
        path: `/books/1/courses/2/pages/4`,
        handleClick: () => {}
      }
    ],
  }
]

export default titleGroups;
