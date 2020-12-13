import React from 'react';

import { useSelector } from 'react-redux';

import PageTitles from './PageTitles';

export default function PageTitlesContainer() {

  const opendPage = useSelector((state) => state.book.opendPage);

  function extractSubTitlesInPage(pageText) {
    const titles = pageText.match(/##\D+?\n/gm) || [];

    return titles.map(title => {
      return title.replace(/(##\s|##)/g, '')
                  .replace(/\n/g, '');
    });
  }

  function getPageTitles(subTitlesInPage) {
    return subTitlesInPage.map((title, index) => ({
      id: index,
      title: title,
      cssId: `#${title.replace(/\s/g, '-')}`
    }))
  };

  return (
    <>
      <PageTitles 
        titles={getPageTitles(
            extractSubTitlesInPage(opendPage.text)
          )}
      />
    </>
  );
}

